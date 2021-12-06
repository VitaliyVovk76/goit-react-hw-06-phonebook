import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { deleteContacts, addContacts, changeFilter } from "./contacts-actions";

const itemsReducer = createReducer([], {
  [addContacts]: (state, { payload }) => {
    if (state.find(({ name }) => name === payload.name)) {
      alert(`${payload.name} is alreadi in contacts`);
      return state;
    }
    return [...state, payload];
  },

  [deleteContacts]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
