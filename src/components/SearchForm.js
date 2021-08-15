import { useRef, useEffect } from 'react';
import { useGlobalContext } from '../helpers/context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  const searchCoctail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favourite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCoctail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
