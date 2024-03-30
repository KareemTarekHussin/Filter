import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import RegisterForm from './RegisterForm';
import Card from "./Card";
import SearchBar from "./SearchBar";
import "./Desktop.css"


export default function Desktop() {
  
  const [cards, setCards] = useState([]);
  const history = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://dummyapi.io/data/v1/user", {
          method: "GET",
          headers: {
            "app-id": "64fc4a747b1786417e354f31",
          },
        });
        const result = await response.json();
        console.log(result);
        setCards(result.data);
        // console.log(cards);
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchUsers();
  }, []);
  

  function handleClick(){
    history.push('/addUser');
  }


  return (
    <section className="imageMain d-flex align-items-center">
      <div className="w-75 m-auto p-5 shadow-lg border border-white rounded  ">
       <SearchBar></SearchBar>
        <div className="row">
          <div className="col-12">
            <button onClick={handleClick} className="buttonadd btn buttonadd p-3 rounded-pill float-end">
              Add New Contact
            </button>
          </div>
        </div>
<br /><br />
        <div className="row ">
         
          {cards.map((card) => (
        <Card key={card.id} card={card} />))} 
        </div>
       
      

      </div>
    </section>
  );
}
