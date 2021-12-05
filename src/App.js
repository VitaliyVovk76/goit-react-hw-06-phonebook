import React, { Component } from "react";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import s from "./App.module.css";

class App extends Component {
  //   state = {
  //     contacts: [],
  //     filter: "",
  //   };

  //   //берет значение из localStorage и записывает в state
  //   componentDidMount() {
  //     const contacts = localStorage.getItem("contacts");
  //     const parsedContacts = JSON.parse(contacts);
  //     if (parsedContacts) {
  //       this.setState({ contacts: parsedContacts });
  //     }
  //   }
  //   //если обновился state, записывает его в localStorage
  //   componentDidUpdate(prevProps, prevState) {
  //     const nextContacts = this.state.contacts;
  //     const prevContacts = prevState.contacts;
  //     if (nextContacts !== prevContacts) {
  //       localStorage.setItem("contacts", JSON.stringify(nextContacts));
  //     }
  //   }

  //   //принимает state из ContactForm, делает проверку и записывает его в state App
  //   addContact = (data) => {
  //     const { name, number, id } = data;
  //     if (this.banToAdd(data.name)) {
  //       alert(`${data.name} is alreadi in contacts`);
  //       return;
  //     }

  //     this.setState((prevState) => ({
  //       contacts: [...prevState.contacts, { name, number, id }],
  //     }));
  //   };

  //находит одинаковые имена в this.state.contacts
  banToAdd = (searchName) => {
    return this.state.contacts.find(({ name }) => name === searchName);
  };

  //записывает в this.state.filter значение
  //   changeFilter = (e) => {
  //     this.setState({ filter: e.currentTarget.value });
  //   };

  // //фильтрует this.state.contacts
  //   getVisibleContacts = () => {
  //     const { filter, contacts } = this.state;
  //     const normalizedFilter = filter.toLowerCase();
  //     return contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(normalizedFilter)
  //     );
  //   };

  //   //удаляет выбранный контакт
  //   deleteContact = (contactId) => {
  //     this.setState((prevState) => ({
  //       contacts: prevState.contacts.filter(
  //         (contact) => contact.id !== contactId
  //       ),
  //     }));
  //   };
  render() {
    // const { filter, contacts, id } = this.state;
    // const visibleContacts = this.getVisibleContacts();
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
}

export default App;
