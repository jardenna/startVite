import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Nav: FC = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Public Page</NavLink>
      </li>
      <li>
        <NavLink to="/protected">Protected Page</NavLink>
      </li>
    </ul>
  </nav>
);
export default Nav;
