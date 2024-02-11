'use client'
const SearchQuery = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const searchQuery = from.search.value;
    console.log(searchQuery);
    from.reset()
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Find movies or tv show"
        className="w-full px-3 py-2 bg-transparent border focus:outline-none"
      />
    </form>
  );
};

export default SearchQuery;
