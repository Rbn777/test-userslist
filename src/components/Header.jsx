import React from 'react';
import { Link } from 'react-router-dom';

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>List of Users</h1>
      </Link>
    </div>
  );
};

export default Header;