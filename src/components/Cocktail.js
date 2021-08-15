import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Cocktail = ({ id, image, name, info, glass }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
        <button type='button' className='btn btn-primary btn-details'>
          <FaHeart />
        </button>
      </div>
    </article>
  );
};

export default Cocktail;
