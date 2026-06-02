# Laboratorium 11 - Wprowadzenie do RxJS

To repozytorium jest starterem do pierwszego ćwiczenia z biblioteką `RxJS`. Laboratorium wprowadza podstawy programowania reaktywnego i pokazuje, jak zamienić zdarzenia użytkownika na strumień danych, który można filtrować, opóźniać i przekształcać.

## Cel

Po wykonaniu zadania powinieneś umieć:

- wyjaśnić, czym jest `Observable` i `Subscription`
- rozpoznać, kiedy dane lub zdarzenia warto potraktować jako strumień
- użyć `Subject` do przechwytywania zmian z pola tekstowego
- zbudować prosty potok z `pipe()`
- zastosować `map`, `filter`, `debounceTime` i `distinctUntilChanged`
- poprawnie posprzątać subskrypcję po odmontowaniu komponentu

## Wymagania wstępne

Przed rozpoczęciem laboratorium powinieneś rozumieć:

- podstawy `React`
- komponenty funkcyjne i hooki `useState`, `useEffect`, `useRef`
- obsługę zdarzeń formularzy
- różnicę między stanem komponentu a danymi wejściowymi użytkownika

## Start

```bash
npm install
npm run dev
```

- aplikacja: `http://localhost:5173`

## Wprowadzenie

`RxJS` pomaga pracować z danymi, które pojawiają się w czasie. Zamiast reagować ręcznie na każde zdarzenie osobno, możemy zbudować jeden strumień i opisać, co ma się z nim stać po drodze.

Przykładowe zastosowania:

- wyszukiwarka reagująca na wpisywany tekst
- opóźnianie żądań do API przez `debounceTime`
- anulowanie poprzedniego zapytania po zmianie danych wejściowych
- łączenie kilku źródeł danych, np. tekstu i filtrów
- reagowanie na kliknięcia, wpisywanie i timery w jednym przepływie

## Krótkie przykłady

### Observable i subskrypcja

```js
import { of } from 'rxjs';

const source$ = of(1, 2, 3);

const subscription = source$.subscribe((value) => {
  console.log('Wartość:', value);
});

subscription.unsubscribe();
```

### Prosty potok operatorów

```js
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

from([1, 2, 3, 4, 5])
  .pipe(
    filter((value) => value % 2 === 1),
    map((value) => value * 10),
  )
  .subscribe((value) => {
    console.log(value);
  });
```

### Reaktywna obsługa pola tekstowego

```js
input$
  .pipe(
    map((value) => value.trim().toLowerCase()),
    filter((value) => value.length >= 2),
    debounceTime(300),
    distinctUntilChanged(),
  )
  .subscribe((query) => {
    console.log('Szukaj:', query);
  });
```

## Co masz zrobić

Uzupełnij `TODO` w tych plikach:

- `src/components/SearchExercise.jsx` - zbuduj strumień zmian z pola tekstowego
- `src/components/SearchExercise.jsx` - dodaj `map`, `filter`, `debounceTime`, `distinctUntilChanged`
- `src/components/SearchExercise.jsx` - aktualizuj listę wyników na podstawie strumienia
- `src/components/SearchExercise.jsx` - zamknij subskrypcję w funkcji czyszczącej `useEffect`

## Kolejność pracy

1. Uruchom projekt i obejrzyj sekcję z wprowadzeniem.
2. Przejrzyj plik `src/components/SearchExercise.jsx`.
3. Sprawdź dane wejściowe w `src/data/technologies.js`.
4. Utwórz `Subject`, który będzie zbierał wpisywany tekst.
5. Zbuduj potok operatorów zgodnie z opisem w komentarzach `TODO`.
6. Połącz wynik strumienia z aktualizacją listy na ekranie.
7. Przetestuj kilka scenariuszy ręcznie.

## Jak sprawdzić wynik

- wpisanie tekstu nie aktualizuje wyników natychmiast, tylko po krótkim opóźnieniu
- spacje na początku i końcu nie wpływają na wynik
- ponowne wpisanie tej samej wartości nie uruchamia niepotrzebnej aktualizacji
- krótkie lub puste zapytanie czyści listę wyników
- po odmontowaniu komponentu nie pojawiają się ostrzeżenia związane z subskrypcją

## Wariant minimum

- działający `Subject`
- poprawny potok z operatorami
- aktualizacja wyników na ekranie
- poprawne `unsubscribe()`

## Wariant rozszerzony

- dodaj licznik wykonanych wyszukiwań
- pokaż historię ostatnich 5 zapytań
- zablokuj wyszukiwanie dla zapytań krótszych niż 2 znaki

## Linki

- [KONSPEKT_11.docx](https://pwsztaredupl-my.sharepoint.com/:w:/g/personal/d_aksamit_atar_edu_pl/IQDK_ExlQkl5SoyzhpOCGqHmAar6hoZ8wYmraXC1iWq0Krw?e=e4nc6L)
- [Przestrzeń OneDrive](https://pwsztaredupl-my.sharepoint.com/:f:/g/personal/d_aksamit_atar_edu_pl/IgBgY_8KvVXIS5T4PcUEnFdLAZBLT9hqNIzcrYvT0jVgbB8?e=nn6RRc) do oddania zadań z laboratorium
