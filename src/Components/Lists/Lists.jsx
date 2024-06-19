import { CiStar } from "react-icons/ci";


import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const Lists = ({ appliedJob }) => {
    const { bookName, author, image, rating, category, tags, publisher, yearOfPublishing, id } = appliedJob;

    return (
     <div className=' '>
    <div className="card card-side bg-base-100 shadow-xl mt-10">
  <figure className='p-2'><img src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold text-black">{bookName}</h2>
    <p className='font-bold'>By:{author}</p>
    <div className="card-actions ">
    <div className="badge badge-outline bg-[#23BE0A0D] text-green-700">{tags[0]}</div> 
    <div className="badge badge-outline bg-[#23BE0A0D] text-green-700">{tags[1]}</div>
    </div>
    <div>
    <div>
    <h2 className='text-3xl font-bold text-black p-5'>By:{author}</h2>
  </div>
  <hr />
  <div className="flex justify-between items-center p-5">
    <h1 className=' text-xl'>{category}</h1>
    
    <h1 className="flex items-center">{rating}<CiStar className="text-orange-400" /></h1>
  </div>
    </div>
    <div className="space-x-3">
    <button className="btn btn-outline btn-info">{category}</button>
<button className="btn btn-outline btn-success">{}rating</button>
<NavLink to={`/details/${id}`}><button className="btn btn-outline btn-warning">View Details</button></NavLink>

    </div>
  </div>
</div>
     </div>
    );
};

Lists.propTypes = {
    appliedJob: PropTypes.shape({
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        publisher: PropTypes.string.isRequired,
        yearOfPublishing: PropTypes.number.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
};

export default Lists;
