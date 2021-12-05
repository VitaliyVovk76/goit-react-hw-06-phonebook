import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import { connect } from "react-redux";
import { deleteContacts } from "../../redux/contacts/contacts-actions";
import s from "./ContactsList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
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
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const getVisibleContacts = (allItems, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allItems.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};

//еще отрефакторить 1:57:33
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (contactId) => dispatch(deleteContacts(contactId)),
});

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
