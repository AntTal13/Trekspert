export default function SearchBar({
    handleChange,
    handleSubmit,
    searchString
  }) {
    return (
    <>
      <h1 className="weatherHeader">Weather</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="CHECK THE WEATHER"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={searchString}
        />
        <button type="submit">Search</button>
      </form>
    </>
    );
}
  