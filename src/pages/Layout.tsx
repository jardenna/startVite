import { FC } from 'react';
import { NavLink, Outlet, useRouteLoaderData } from 'react-router-dom';
import AuthStatus from '../components/AuthStatus';

interface LayoutProps {}
const Layout: FC<LayoutProps> = () => {
  // Get our logged in user, if they exist, from the root route loader data
  const { user } = useRouteLoaderData('root') as { user: string | null };
  console.log(user);

  return (
    <div>
      <h1>Auth Example using RouterProvider</h1>

      <AuthStatus />

      <ul>
        <li>
          <NavLink to="/">Public Page</NavLink>
        </li>
        <li>
          <NavLink to="/protected">Protected Page</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
export default Layout;
