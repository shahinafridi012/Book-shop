
import Banner from "../Banner/Banner";
import Book from "../Book/Book";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            
            <div className="mt-10">
            <Book></Book>
            </div>
            
        </div>
    );
};

export default Home;