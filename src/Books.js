import { useState, useEffect } from "react";
import axios from "axios";
const Books = () => {
 const [books, setBooks] = useState({});
 useEffect(() =>{
   console.log('mounted');
   getBooks();
 }, []);

 const getBooks = async () => {
   let response = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5");
    console.log(response.data.data)
    setBooks(response.data.data)
  } 

  const renderBooks = (books) => {
    return books.map((book) => {
        return (
          <div>
            <h1>
              First Book Name
            </h1>
          </div>
        )
    })
  }
  return (
   <div>
     <p>books here</p>
   </div>
 )
}
export default Books