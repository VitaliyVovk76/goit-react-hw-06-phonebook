import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContacts = createAction("contacts/add", ({ name, number }) => ({
  payload: { name, number, id: shortid.generate() },
}));

const deleteContacts = createAction("contacts/delete");

const changeFilter = createAction("contacts/changeFilter");

export { addContacts, deleteContacts, changeFilter };
