import { createBrowserRouter, redirect } from 'react-router-dom';
import fakeAuthProvider from '../auth/auth';
import {
  loginAction,
  loginLoader,
  protectedLoader,
} from '../auth/authFunctions';
import Layout from '../pages/Layout';
import LoginPage from '../pages/LoginPage';
import ProtectedPage from '../pages/ProtectedPage';
import PublicPage from '../pages/PublicPage';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
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
        path: 'login',
        action: loginAction,
        loader: loginLoader,
        element: <LoginPage />,
      },
      {
        path: 'protected',
        loader: protectedLoader,
        element: <ProtectedPage />,
      },
    ],
  },
  {
    path: '/logout',
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await fakeAuthProvider.signout();
      return redirect('/');
    },
  },
]);

export default router;
