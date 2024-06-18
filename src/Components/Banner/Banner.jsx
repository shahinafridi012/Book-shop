import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="container mx-auto ">
            <div className="container mx-auto bg-[#1313130D] rounded-2xl justify-between">
  <div className="hero-content flex-col lg:flex-row-reverse justify-around">
    <img src="/public/pngwing 1.png" className="w-[400px] rounded-lg shadow-2xl" />
    <div className="p-10 space-x-3 space-y-4">
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut <br /> assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <NavLink to='/listed'><button  className="btn  btn-success">View The List</button></NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;