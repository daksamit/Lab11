import { useEffect, useMemo, useRef, useState } from 'react';
import { Subject } from 'rxjs';
import { technologies } from '../data/technologies.js';

const SearchExercise = () => {
  const input$ = useMemo(() => new Subject(), []);
  const [inputValue, setInputValue] = useState('');
  const [normalizedQuery, setNormalizedQuery] = useState('');
  const [matches, setMatches] = useState([]);
  const [status, setStatus] = useState('Wpisz zapytanie i połącz formularz z RxJS.');
  const executionCountRef = useRef(0);

  useEffect(() => {
    // TODO:
    // 1. Dodaj import operatorów map, filter, debounceTime i distinctUntilChanged z RxJS.
    // 2. Zbuduj potok na input$ przez pipe().
    // 3. W potoku:
    //    - usuń zbędne spacje,
    //    - zamień tekst na małe litery,
    //    - opóźnij reakcję o około 300 ms,
    //    - pomiń takie samo zapytanie wysłane dwa razy pod rząd.
    // 4. W subskrypcji:
    //    - zaktualizuj normalizedQuery,
    //    - przefiltruj technologies,
    //    - ustaw czytelny komunikat statusu,
    //    - zwiększ licznik wykonań przez executionCountRef.current.
    // 5. Zwróć funkcję czyszczącą z unsubscribe().
    const subscription = input$.subscribe(() => {});

    return () => {
      subscription.unsubscribe();
    };
  }, [input$]);

  const handleChange = (event) => {
    const nextValue = event.target.value;
    setInputValue(nextValue);

    // TODO: Zamiast obsługi imperatywnej przekaż nextValue do input$ przez next().
    void nextValue;
  };

  const previewCount = matches.length;

  return (
    <section className="exercise-panel p-4 p-lg-5">
      <div className="d-flex flex-column flex-lg-row gap-4 justify-content-between mb-4">
        <div>
          <p className="small text-uppercase fw-semibold text-primary mb-2">
            Zadanie główne
          </p>
          <h2 className="h3 mb-2">Reaktywne filtrowanie technologii</h2>
          <p className="text-secondary mb-0">
            Starter działa, ale logika wyszukiwania nie jest jeszcze połączona
            z `RxJS`. Twoim zadaniem jest zamienić zmiany pola tekstowego na
            kontrolowany strumień.
          </p>
        </div>

        <div className="status-card p-3">
          <div className="small text-uppercase fw-semibold text-primary mb-2">
            Podgląd
          </div>
          <div className="fw-semibold mb-1">
            Liczba dopasowań: <span className="text-primary">{previewCount}</span>
          </div>
          <div className="text-secondary small">
            Liczba wykonań subskrypcji: {executionCountRef.current}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="rxjs-search" className="form-label fw-semibold">
          Szukaj technologii
        </label>
        <input
          id="rxjs-search"
          className="form-control form-control-lg"
          placeholder="np. react, state, api"
          value={inputValue}
          onChange={handleChange}
        />
        <div className="form-text">
          Po implementacji wynik powinien aktualizować się po krótkim
          opóźnieniu, a nie po każdym znaku natychmiast.
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-lg-6">
          <article className="info-card h-100 p-3">
            <h3 className="h6 mb-3">Stan aktualny</h3>
            <p className="mb-2">
              Ostatnie zapytanie po normalizacji:{' '}
              <code>{normalizedQuery || '(brak)'}</code>
            </p>
            <p className="mb-0 text-secondary">{status}</p>
          </article>
        </div>
        <div className="col-lg-6">
          <article className="info-card h-100 p-3">
            <h3 className="h6 mb-3">Na co zwrócić uwagę</h3>
            <ul className="mb-0 text-secondary">
              <li>normalizacja tekstu</li>
              <li>unikanie nadmiarowych reakcji</li>
              <li>sprzątanie subskrypcji</li>
            </ul>
          </article>
        </div>
      </div>

      <article className="result-panel p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="h5 mb-0">Dopasowania</h3>
          <span className="badge text-bg-light border">{previewCount}</span>
        </div>

        {matches.length === 0 ? (
          <p className="text-secondary mb-0">
            Po wykonaniu zadania tutaj powinny pojawiać się dopasowane
            technologie.
          </p>
        ) : (
          <div className="d-flex flex-wrap gap-2">
            {matches.map((item) => (
              <span className="badge rounded-pill text-bg-primary px-3 py-2" key={item.id}>
                {item.name}
              </span>
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default SearchExercise;
