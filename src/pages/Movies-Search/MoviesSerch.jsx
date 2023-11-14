import { useSearchParams } from 'react-router-dom';
import css from './MoviesSerch.module.css';

export const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('searchQuery') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.searchQuery.value.trim() === '') {
      alert('You didnt enter anything');
      return;
    }
    setSearchParams({ searchQuery: evt.target.elements.searchQuery.value });
    evt.currentTarget.reset();
  };

  return (
    <div className={css.SearchContainer}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          className={css.SearchInput}
          type="text"
          name="searchQuery"
          placeholder="Search for movie"
          autoComplete="on"
          autoFocus
          defaultValue={search}
        />
        <button className={css.SearchButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
