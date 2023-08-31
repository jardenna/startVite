import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AuthStatus from '../components/AuthStatus';

interface LayoutProps {}
const Layout: FC<LayoutProps> = () => (
  <section className="main-container">
    <header className="header">
      <article className="container">
        <h1>Auth Example using RouterProvider</h1>
        <AuthStatus />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Public Page</NavLink>
            </li>
            <li>
              <NavLink to="/protected">Protected Page</NavLink>
            </li>
            <li>
              <NavLink to="/colors">Colors</NavLink>
            </li>
          </ul>
        </nav>
      </article>
    </header>

    <main className="container">
      <Outlet />
    </main>

    <footer className="container">
      © 2023 Startup Vite, All rights reserved.
    </footer>
  </section>
);
export default Layout;
