import { useParams } from "react-router-dom";
import ContactInfo from "../components/ContactInfo";

const ContactPage = () => {
  const params = useParams<{ id: string }>();
  const id = params.id as string;

  return (
    <div className="flex justify-center">
      <ContactInfo id={id} />
    </div>
  );
};

export default ContactPage;
