import { useEffect, useState } from "react";
import Books from "../Books/Books";

const Book = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('josn.json')  // Ensure the correct path to your JSON file
            .then(res => res.json())
            .then(data => setBooks(data))
            
    }, []);
    

    return (
        <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 container mx-auto ">
            {
                books.map(book => <Books key={book.id} book={book} />)
            }
        </div>
    );
};

export default Book;
