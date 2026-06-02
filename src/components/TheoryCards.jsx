const cards = [
  {
    title: 'Observable',
    text: 'Źródło danych, które emituje wartości w czasie. Nie musi zwrócić wszystkiego od razu.',
  },
  {
    title: 'Subscription',
    text: 'Połączenie między źródłem a odbiorcą. Trzeba je zakończyć, gdy komponent przestaje być potrzebny.',
  },
  {
    title: 'Operators',
    text: 'Funkcje takie jak map, filter i debounceTime pozwalają przekształcać strumień bez ręcznego sterowania każdym krokiem.',
  },
];

const TheoryCards = () => (
  <section className="row g-3 mb-4">
    {cards.map((card) => (
      <div className="col-md-4" key={card.title}>
        <article className="info-card h-100 p-4">
          <p className="small text-uppercase fw-semibold text-primary mb-2">
            Pojęcie
          </p>
          <h2 className="h5">{card.title}</h2>
          <p className="mb-0 text-secondary">{card.text}</p>
        </article>
      </div>
    ))}
  </section>
);

export default TheoryCards;
