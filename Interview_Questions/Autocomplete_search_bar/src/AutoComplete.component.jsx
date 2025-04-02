import { useEffect, useState } from 'react';

export const AutoComplete = () => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(async () => {
    const results = await fetch(`https://dummyjson.com/recipes`);
    const data = await results.json()?.recipes;
    const recipes = data.map((item) => item.name);
    console.log(recipes);
    setSuggestions(recipes);
  }, []);
  return (
    <div>
      <input
        id="search-input"
        type="text"
        onChange={handleChange}
      />

      <div>
        {suggestions.map((suggestion) => {
          return <div>{suggestion}</div>;
        })}
      </div>
    </div>
  );
};
