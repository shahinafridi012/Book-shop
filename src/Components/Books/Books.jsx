
import { CiStar } from "react-icons/ci";
import PropTypes from 'prop-types';

const Books = ({ book }) => {
    const { bookName, author, image, rating, category, tags, publisher, yearOfPublishing } = book;  // Destructuring the book object to extract bookName and author

    return (
        <div>
            
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
  <div className="card-actions ">
      <div className="badge badge-outline bg-[#23BE0A0D] text-green-700">{tags[0]}</div> 
      <div className="badge badge-outline bg-[#23BE0A0D] text-green-700">{tags[1]}</div>
    </div>
    <h2 className="card-title text-3xl">
      {bookName}
      <div className="badge badge-secondary">{rating}</div>
    </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi tempora ratione maxime accusantium! Harum eaque voluptate, similique deleniti non expedita reprehenderit quisquam sequi necessitatibus at ab, minima hic, adipisci nemo.</p>
    
  </div>
  <div>
    <h2 className='text-3xl font-bold text-black p-5'>By:{author}</h2>
  </div>
  <hr />
  <div className="flex justify-between items-center p-5">
    <h1 className=' text-xl'>{category}</h1>
    
    <h1 className="flex items-center">{rating}<CiStar className="text-orange-400" /></h1>
  </div>
</div>
        </div>
    );
};

Books.propTypes = {
    book: PropTypes.shape({
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string,
        rating: PropTypes.number,
        category: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        publisher: PropTypes.string,
        yearOfPublishing: PropTypes.number,
    }).isRequired,
};

export default Books;
