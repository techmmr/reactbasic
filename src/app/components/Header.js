import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><Link to="/">Product List</Link></li>
            <li><Link to="/add-item">Add Item</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};