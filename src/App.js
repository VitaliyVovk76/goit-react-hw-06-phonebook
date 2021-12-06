import React from "react";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import s from "./App.module.css";

function App() {
  return (
    <Container>
      <h1 className={s.appTitle}>Phonebook</h1>
      <ContactForm />

      <h2 className={s.appTitle}>Contacts</h2>
      <Filter />

      <ContactList />
    </Container>
  );
}

export default App;
