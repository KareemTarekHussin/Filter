import "./addUser.css";
import imagesmall from "../assets/Ellipse1.png";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function AddUser({ card }) {
  const [firstName, setFirstName] = useState(card ? card.firstName : "");
  const [lastName, setLastName] = useState(card ? card.LastName : "");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
const history = useNavigate()


  const handleSubmit = async (e, card) => {
    e.preventDefault();
    if (card) {
      const cardId = card.id;
      try {
        const response = await fetch(
          `https://dummyapi.io/data/v1/user/${cardId}`,
          {
            method: "PUT",
            headers: {
              "app-id": "64fc4a747b1786417e354f31",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              phoneNumber,
              email,
            }),
          }
        );

        if (response.ok) {
          // Redirect to the Landing page
          history.push('/Desktop');
        } else {
          // Handle error response from the API
          console.error("Failed to create card");
        }
      } catch (error) {
        // Handle network or other errors
        console.error("Failed to create card", error);
      }
    } else {
      // Create a new card on the server using the API
      try {
        const response = await fetch(
          "https://dummyapi.io/data/v1/user/create",
          {
            method: "POST",
            headers: {
              "app-id": "64fc4a747b1786417e354f31",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              phoneNumber,
              email,
            }),
          }
        );

        if (response.ok) {
          // Redirect to the Landing page
          history.push('/Desktop');
        } else {
          // Handle error response from the API
          console.error("Failed to create card");
        }
      } catch (error) {
        // Handle network or other errors
        console.error("Failed to create card", error);
      }
    }
  };

  return (
    <section className="imageMain d-flex align-items-center bodycolor">
      <form
        onSubmit={handleSubmit}
        className=" bg-white w-75 m-auto p-5 shadow-lg border border-white rounded "
      >
        <div className="d-flex justify-content-center">
          <div>
            <img
              className="imageSmall rounded-circle border border-black"
              src={imagesmall}
              alt=""
            />
            <p>Upload Photo</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="input-group mb-3 input-group-lg">
              <div className="input-group-prepend"></div>
              <input
                type="text"
                className="form-control rounded-pill textgray border border-white"
                placeholder="First Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group mb-3 input-group-lg">
              <div className="input-group-prepend"></div>
              <input
                type="text"
                className="form-control rounded-pill textgray border border-white"
                placeholder="Last Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-6">
            <div className="input-group mb-3 input-group-lg">
              <div className="input-group-prepend"></div>
              <input
                type="text"
                className="form-control rounded-pill textgray border border-white"
                placeholder="Phone Number"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group mb-3 input-group-lg">
              <div className="input-group-prepend"></div>
              <input
                type="text"
                className="form-control rounded-pill textgray border border-white"
                placeholder="Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row"></div>

        <br />
        <div className="row">
          <div className="col">
            <button className="btn cancelButton rounded-pill">Cancel</button>
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn saveButton rounded-pill float-end"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
