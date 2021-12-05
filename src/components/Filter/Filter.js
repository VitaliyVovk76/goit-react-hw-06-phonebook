import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import s from "./Filter.module.css";

const Filter = ({ value, onChang }) => (
  <div className={s.filterWrapper}>
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={onChang}
      />
    </label>
  </div>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChang: (e) => dispatch(changeFilter(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChang: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
