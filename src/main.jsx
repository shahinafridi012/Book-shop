import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Pages from './Components/Pages/Pages.jsx';
import BookDetails from './Components/BookDeatils/BookDetails.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';

import ListedBook from './Components/ListedBook/ListedBook.jsx';
import WishListBooks from './Components/WishListBooks/WishListBooks.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },{
        path:'/pages',
        element: <Pages></Pages>
      },{
         path:'/details/:id',
         element: <BookDetails></BookDetails>,
         loader:()=> fetch('../josn.json')
      },{
        path:'/listed',
        element : <ListedBooks></ListedBooks>,
      },
         { path:'/listedbook',
          element: <ListedBook></ListedBook>,
          loader: ()=>fetch('josn.json')
        },
          
          {
            path:'/wishlist',
            element: <WishListBooks></WishListBooks>
          },
        
      
    ]
  
  },
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);