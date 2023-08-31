import ColorPage from '../pages/ColorPage';
import ProtectedPage from '../pages/ProtectedPage';
import PublicPage from '../pages/PublicPage';

const routes = [
  {
    path: '/',
    element: <PublicPage />,
    linkName: 'Home',
    index: true,
  },
  {
    path: 'protected',
    element: <ProtectedPage />,
    linkName: 'Protected',
    protected: true,
  },
  {
    path: 'colors',
    element: <ColorPage />,
    linkName: 'Colors',
  },
];

export default routes;
