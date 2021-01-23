import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { HOME, LIST, RICK_AND_MORTY, USER } from '../../constants/paths';
import './header.css';

const Header = () => (
  <header className="header">
    <nav className="header-nav">
      <ul className="header__nav-links">
        <li className="header__nav-link">
          <NavLink to={HOME}>Home</NavLink>
        </li>

        <li className="header__nav-link">
          <NavLink to={LIST}>List</NavLink>
        </li>

        <li className="header__nav-link">
          <NavLink to={USER}>User</NavLink>
        </li>

        <li className="header__nav-link">
          <NavLink to={RICK_AND_MORTY}>Rick</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default memo(Header);
