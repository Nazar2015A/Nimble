import React from "react";
import { useGetContactQuery } from "../store/api/apiSlice";
import Tag from "./Tag";
import AddTagForm from "./AddTagForm";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import BackIcon from "../assets/icons/back";

interface ContactInfoProps {
  id: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ id }) => {
  const { data, error, isLoading } = useGetContactQuery(id);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching contact</div>;
  }

  if (!data?.resources.length) {
    return (
      <div>
        <h3>Contact not found</h3>
        <Button onClick={handleBack}>Back</Button>
      </div>
    );
  }
  const contact = data.resources[0];
  const firstName = contact.fields["first name"]?.[0].value || "First name";
  const lastName = contact.fields["last name"]?.[0].value || "Last name";
  const email = contact.fields.email?.[0].value || "email@gmail.com";

  return (
    <div className="max-w-[600px] w-full flex items-center flex-col px-5">
      <Button
        className="my-4 bg-transparent text-indigo-500 w-fit hover:text-white"
        onClick={handleBack}
      >
        <BackIcon /> Back
      </Button>
      <div className="flex gap-3 items-center mb-7">
        <img
          src={contact.avatar_url}
          alt={contact.creator}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="w-full overflow-hidden">
          <p className="truncate">
            {firstName} {lastName}
          </p>
          <p className="truncate">{email}</p>
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-semibold text-lg">Tags</h3>
        <div>
          <div className="flex items-center gap-2 flex-wrap mt-4 mb-9">
            {contact.tags.length > 0 ? (
              contact.tags.map((tag) => <Tag value={tag.tag} key={tag.id} />)
            ) : (
              <p>No tags found</p>
            )}
          </div>
          <AddTagForm contactId={contact.id} tagState={contact.tags} />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
