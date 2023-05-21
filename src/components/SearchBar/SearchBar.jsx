export default function SearchBar({
    handleChange,
    handleSubmit,
    searchString
  }) {
    return (
    <>
      <h1 className="weatherHeader">Weather</h1>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="searchBar"
          placeholder="CHECK THE WEATHER"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={searchString}
        />
        <button className="searchButton" type="submit">Search</button>
      </form>
    </>
    );
}
  