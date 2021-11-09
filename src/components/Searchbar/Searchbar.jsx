import { useState } from "react";
import PropTypes from "prop-types";

import s from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [userQuery, setUserQuery] = useState("");

  const handleInputChange = ({ target }) => {
    setUserQuery(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userQuery);
    setUserQuery("");
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.searchFormButton}>
          <span className={s.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={userQuery}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
