import { useGlobalContext } from '../helpers/context';
import Loading from '../components/Loading';
// import Cocktail from '../components/Cocktail';

const Favorites = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Under Construction</h2>
      {/* <div className='cocktails-center'>
        {favourites.map(item => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div> */}
    </section>
  );
};

export default Favorites;
