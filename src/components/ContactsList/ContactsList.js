import React from "react";
import shortid from "shortid";
import { useSelector, useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contacts/contacts-actions";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import s from "./ContactsList.module.css";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (contactId) => dispatch(deleteContacts(contactId));

  return (
    <div className={s.contactsWrapper}>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={shortid.generate()}>
            <span>{name}: </span>
            <span>{number}</span>
            <button
              className={s.contactButton}
              type="button"
              onClick={() => onDeleteContact(id)}
              //onClick={() => dispatch(deleteContacts(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
