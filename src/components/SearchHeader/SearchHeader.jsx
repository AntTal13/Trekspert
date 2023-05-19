export default function SearchHeader({ lastSearch }) {
    return (
      <>
        <h1>Weather</h1>
        <p>
          Showing results for <strong>{lastSearch}</strong>
        </p>
      </>
    );
  }
  