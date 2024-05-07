import React from "react";
import List from "./List/Index";
import Form from "./Form/Index";
import { useState } from "react";
import { useEffect } from "react";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Erdi",
      phone_number: "1234567",
    },
    {
      fullname: "Serhan",
      phone_number: "7654321",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <hr />
      <br />
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
