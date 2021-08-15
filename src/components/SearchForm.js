import { useGlobalContext } from '../helpers/context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return <div>Search Form Component</div>;
};

export default SearchForm;
