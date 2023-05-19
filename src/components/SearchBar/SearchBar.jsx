export default function SearchBar({
    handleChange,
    handleSubmit,
    searchString
  }) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={searchString}
        />
        <button type="submit">Search</button>
      </form>
    );
}
  