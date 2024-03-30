import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Card({ card }) {
  // async function deleteUsers(cardId) {
  //   try {
  //   const response =  await fetch(
  //       `https://dummyapi.io/data/v1/user/${cardId}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           "app-id": "64fc4a747b1786417e354f31",
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }


  const history = useNavigate()
  const deleteUsers = async (cardId) => {
    try {
      await fetch(`https://dummyapi.io/data/v1/user/${cardId}`, 
      {
        method: 'DELETE',
        headers: {
          "app-id": "64fc4a747b1786417e354f31",
      }});
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  function handleClick(){
    history.push('/addUser');
  }

  return (
    <div className="row">
      <div className="col-1">
        <img className="imageSmall rounded-circle" src={card.picture} alt="" />
      </div>
      <div className="col-4">
        <p className="float-start text-white">
          {card.firstName}
          {card.lastName}
        </p>
        <p className="col-2 textStandard">01123212212</p>
      </div>
      <div className="col-7">
        <div className="d-flex float-end">
          <button onClick={handleClick} className="btn btn-light m-2">
            Edit
          </button>
          <button onClick={deleteUsers(card.id)} className="btn btn-light m-2">Delete</button>
        </div>
      </div>
      <hr className="text-white " />
    </div>
  );
}
