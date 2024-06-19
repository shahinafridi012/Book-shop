import { NavLink } from "react-router-dom";


const ListedBooks = () => {
    return (
        <div>
           <div className="mockup-window border bg-base-300">
  <div className="flex justify-center px-4 py-16 bg-base-200 text-black font-extrabold text-5xl">BOOKS</div>
</div>
<div className="grid grid-rows-3 grid-flow-col gap-4">
  <div className="row-span-3 ... space-x-0">
    <NavLink to='/listedbook'><button className="btn btn-outline btn-warning">Read Books</button></NavLink><NavLink to='/wishlist'><button className="btn btn-outline btn-info">Wishlist Books</button></NavLink>
  </div>
  <div>

  </div>
</div>
        </div>
    );
};

export default ListedBooks;