
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility";


const BookDetails = () => {
    const deatils = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = deatils.find(detail=>detail.id === idInt)
    const { bookName, author, image, rating, category, tags, publisher, yearOfPublishing, review, totalPages} = detail; 
    const notify = () => {
        saveJobApplication(idInt)
        toast("Added In ListedBooks")
    };
    return (
      <div className="container mx-auto">
          <div className="flex justify-around   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
            <div className="hero-content  flex-col lg:flex-row bg-[#1313130D]  rounded-2xl ml-10">
                <img src={image} className=" w-[300px]  " />
            </div>
            <div className=" lg:w-[150%] mx-auto space-y-4 p-10">
               <div className="space-y-1">
               <h1 className="text-5xl font-bold text-black">{bookName}</h1>
               <h1 className="text-xl font-bold text-green-400">By:{author}</h1>
               </div>
               <hr />
                <div className="space-y-4">
                    <h1 className="font-bold text-1xl">{category}</h1>
                   <hr />
                   <p>{review}</p>
                   <div className="flex space-x-2 ">
                    <h1 className="text-1xl font-bold text-green-500 ">Tags</h1>
                    <h1 className="badge badge-outline"><span className="text-2xl text-green-600">#</span>{tags[0]} </h1>
                    <h1 className="badge badge-outline"><span className="text-2xl text-green-600">#</span>{tags[1]}</h1>
                    <hr />
                   </div>
                   <hr />
                   <div className="flex space-x-10">
                        <div>
                            <h1>Number of Pages:</h1>
                            <h1>Publisher:</h1>
                            <h1>Year of Publishing:</h1>
                            <h1>Rating:</h1>
                        </div>
                        <div>
                            <h1 >{totalPages}</h1>
                            <h1>{publisher}</h1>
                            <h1>{yearOfPublishing}</h1>
                        <h1>{rating}</h1>
                        </div>
                   </div>
                   <div className="space-x-3 flex">
                   <button onClick={notify} className="btn btn-outline text-black font-bold">Read</button>
                   <ToastContainer />
                   
                   <button className="btn bg-[#50B1C9] text-white font-bold ">Wishlist</button>
                   </div>
                  
                </div>
            </div>
        </div>
      </div>
    );
};


export default BookDetails;