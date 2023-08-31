import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routeConfig';

function App() {
  return (
    <React.StrictMode>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </React.StrictMode>
  );
}

export default App;
