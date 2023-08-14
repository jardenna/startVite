import { RouterProvider } from 'react-router-dom';
import router from './routes/routeConfig';

function App() {
  return (
    <section className="main-container">
      <header className="header">
        <article className="container">Header</article>
      </header>
      <div className="main">
        <main className="container">
          <RouterProvider
            router={router}
            fallbackElement={<p>Initial Load...</p>}
          />
        </main>
      </div>
      <footer>Footer</footer>
    </section>
  );
}

export default App;
