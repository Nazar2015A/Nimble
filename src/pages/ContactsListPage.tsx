import ContactList from "../components/ContactList";
import CreateContactForm from "../components/CreateContactForm";

const ContactsListPage = () => {
  return (
    <div className="flex flex-col items-start lg:flex-row gap-9 px-5">
      <CreateContactForm className="max-w-[400px] w-full min-w-[300px] flex-shrink-0 lg:sticky lg:top-9 m-auto lg:m-0" />
      <div className="w-full overflow-x-auto">
        <h2 className="text-2xl font-semibold">Contacts</h2>
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsListPage;
