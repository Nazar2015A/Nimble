import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteContactMutation } from "../store/api/apiSlice";
import { Resource } from "../types/contacts";
import Tag from "./Tag";
import Delete from "../assets/icons/delete";

interface ContactCardProps {
  contact: Resource;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();
  const navigate = useNavigate();
  const firstName = contact.fields["first name"]?.[0].value || "First name";
  const lastName = contact.fields["last name"]?.[0].value || "Last name";
  const email = contact.fields.email?.[0].value || "email@gmail.com";

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    deleteContact(contact.id);
  };

  const handleNavigate = () => {
    navigate(`/contact/${contact.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      role="button"
      className="p-4 flex gap-3 border border-gray-100 rounded-md shadow hover:shadow-md transition-shadow duration-300"
    >
      <img
        src={contact.avatar_url}
        alt={contact.creator}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="w-full overflow-hidden">
        <div className="flex items-center justify-between">
          <h3 className="truncate">
            {firstName} {lastName}
          </h3>
          <button
            className="border-none shrink-0 hover:text-red-500 hover:bg-gray-100 p-2 rounded-md transition-colors duration-300"
            onClick={handleDelete}
          >
            {" "}
            <Delete />
          </button>
        </div>{" "}
        <p className="truncate w-full">{email}</p>
        {contact.tags.length ? (
          <div className="flex items-center gap-2 flex-wrap mt-4">
            {contact.tags.map((tag) => (
              <Tag value={tag.tag} key={tag.id} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ContactCard;
