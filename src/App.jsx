import SearchExercise from './components/SearchExercise.jsx';
import TheoryCards from './components/TheoryCards.jsx';

const App = () => (
  <main className="container py-4 py-lg-5">
    <section className="hero-panel p-4 p-lg-5 mb-4">
      <p className="text-uppercase fw-semibold text-primary-emphasis mb-2">
        Laboratorium 11
      </p>
      <h1 className="display-5 fw-bold hero-title mb-3">
        Wprowadzenie do RxJS
      </h1>
      <p className="lead text-secondary mb-0">
        Celem ćwiczenia jest zrozumienie, jak traktować zdarzenia użytkownika
        jako strumień danych i jak przekształcać ten strumień operatorami
        `RxJS`.
      </p>
    </section>

    <TheoryCards />
    <SearchExercise />
  </main>
);

export default App;
