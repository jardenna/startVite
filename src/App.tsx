import ColorPage from './pages/ColorPage';

function App() {
  return (
    <section className="main-container">
      <header className="header">
        <article className="container">Header</article>
      </header>
      <div className="main">
        <main className="container">
          <ColorPage />
        </main>
      </div>
      <footer>Footer</footer>
    </section>
  );
}

export default App;
