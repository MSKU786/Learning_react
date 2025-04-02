import { useEffect, useState, useRef } from 'react';
import './styles.css';

export const AutoComplete = () => {
  const [search, setSearch] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const fetchRecipes = async () => {
    const results = await fetch(
      `https://dummyjson.com/recipes/search?q=${search}`
    );
    const data = await results.json();

    const recipes = data?.recipes?.map((item) => item.name);
    setFilteredSuggestions(recipes);
  };

  useEffect(() => {
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout for debouncing
    timeoutRef.current = setTimeout(() => {
      fetchRecipes();
    }, 500); // 500ms delay

    // Cleanup function to clear timeout on unmount or when search changes
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [search]);

  return (
    <div className="autocomplete-container">
      <input
        id="search-input"
        type="text"
        onChange={handleChange}
        value={search}
      />

      {filteredSuggestions.length > 0 && (
        <div className="autocomplete-results">
          {filteredSuggestions.map((suggestion) => {
            return (
              <div
                className="suggestion-result"
                key={suggestion}
                onClick={() => setSearch(suggestion)}
              >
                {suggestion}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
