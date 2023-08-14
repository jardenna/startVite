import Toast from './pages/Toast';

function App() {
  return (
    <section className="main-container">
      <header className="header">
        <article className="container">Header</article>
      </header>
      <div className="main">
        <main className="container">
          <Toast />
          {/* <ColorPage /> */}
        </main>
      </div>
      <footer>Footer</footer>
    </section>
  );
}

export default App;
