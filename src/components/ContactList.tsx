import { useGetContactsQuery } from "../store/api/apiSlice";
import SkeletonCard from "../skeleton/SkeletonCard";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  if (isLoading) {
    return (
      <div className="w-full flex flex-col gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }
  if (error) return <div>Error occurred</div>;

  const resources = data?.resources || [];
  return resources.map((contact) => (
    <ContactCard key={contact.id} contact={contact} />
  ));
};

export default ContactList;
