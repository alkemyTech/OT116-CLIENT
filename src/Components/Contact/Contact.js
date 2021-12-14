import React from "react";
import Title from "../Title/Title";
import contacto from "../../Assets/TitleImages/contacto.jpg";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <Title title="Contacto" image={contacto} />
      <ContactForm />
    </div>
  );
};

export default Contact;
