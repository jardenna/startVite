import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AuthStatus from './AuthStatus';

interface LayoutProps {}
const Layout: FC<LayoutProps> = () => (
  <div>
    <h1>Auth Example using RouterProvider</h1>

    <p>
      This example demonstrates a simple login flow with three pages: a public
      page, a protected page, and a login page. In order to see the protected
      page, you must first login. Pretty standard stuff.
    </p>

    <p>
      First, visit the public page. Then, visit the protected page. You are not
      yet logged in, so you are redirected to the login page. After you login,
      you are redirected back to the protected page.
    </p>

    <p>
      Notice the URL change each time. If you click the back button at this
      point, would you expect to go back to the login page? No! You are already
      logged in. Try it out, and you will see you go back to the page you
      visited just *before* logging in, the public page.
    </p>

    <AuthStatus />

    <ul>
      <li>
        <NavLink to="/">Public Page</NavLink>
      </li>
      <li>
        <NavLink to="/protected">Protected Page</NavLink>
      </li>
    </ul>

    <Outlet />
  </div>
);
export default Layout;
