import { createBrowserRouter, redirect } from 'react-router-dom';
import fakeAuthProvider from '../auth/auth';
import {
  loginAction,
  loginLoader,
  protectedLoader,
} from '../auth/authFunctions';
import ErrorPage from '../pages/ErrorPage';
import Layout from '../pages/Layout';
import LoginPage from '../pages/LoginPage';
import ProtectedPage from '../pages/ProtectedPage';
import PublicPage from '../pages/PublicPage';
import { Path } from '../types';

const router = createBrowserRouter([
  {
    path: Path.Root,
    errorElement: <ErrorPage />,
  },
  {
    id: 'root',
    path: Path.Root,
    loader() {
      // Our root route always provides the user, if logged in
      return {
        user: fakeAuthProvider.username,
      };
    },
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PublicPage />,
      },
      {
        path: Path.Login,
        action: loginAction,
        loader: loginLoader,
        element: <LoginPage />,
      },
      {
        path: Path.Protected,
        loader: protectedLoader,
        element: <ProtectedPage />,
      },
    ],
  },
  {
    path: Path.Logout,
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await fakeAuthProvider.signout();
      return redirect('/');
    },
  },
]);

export default router;
