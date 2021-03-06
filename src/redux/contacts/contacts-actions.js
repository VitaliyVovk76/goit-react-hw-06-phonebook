import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const addContacts = createAction("contacts/add", ({ name, number }) => ({
  payload: { name, number, id: shortid.generate() },
}));

export const deleteContacts = createAction("contacts/delete");

export const changeFilter = createAction("contacts/changeFilter");
