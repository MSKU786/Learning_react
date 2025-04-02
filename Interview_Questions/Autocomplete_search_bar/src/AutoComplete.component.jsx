import { useEffect, useState } from 'react';

export const AutoComplete = () => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filterSuggestions = suggestions.filter((suggest) =>
      suggest.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filterSuggestions);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      const results = await fetch(`https://dummyjson.com/recipes`);
      const data = await results.json();

      const recipes = data?.recipes?.map((item) => item.name);
      console.log(recipes);
      setSuggestions(recipes);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <input
        id="search-input"
        type="text"
        onChange={handleChange}
        value={search}
      />

      {search && (
        <div>
          {filteredSuggestions.map((suggestion) => {
            return <div>{suggestion}</div>;
          })}
        </div>
      )}
    </div>
  );
};
