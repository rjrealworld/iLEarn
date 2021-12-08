import React, { useState } from "react";
import "./form.css";
import { useAuth } from "../../contexts/AuthContext";

export default function PopUpForm(props) {
  const [ref, setRef] = useState({
    Price: 0,
    user: "",
  });

  const { currentUser } = useAuth();

  const handleRef = (e) => {
    setRef({[e.target.name]: e.target.value, 'user': currentUser.email});
    props.setData((p) => ({...p, 'UserPrice': ref}));
  }

  const handleChange = (e) => {
    props.setData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const functionCall = (e) => {
    e.preventDefault();
    props.addData();
  };

  return (
    <div className="popup-box">
      {/* {console.log(props)} */}
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          X
        </span>
        <div class="row">
          <div class="col-md-12">
            <form className="PopupForm">
              <h1> Upload Book </h1>
              <fieldset>
                {/* <legend>
                  <span class="number">1</span> Basic Info
                </legend> */}
                <label for="Title">Book Name:</label>
                <input
                  type="text"
                  id="Title"
                  name="title"
                  value={props.data.title}
                  onChange={handleChange}
                />
                <label for="Author">Book Author:</label>
                <input
                  type="text"
                  id="Author"
                  name="author"
                  value={props.data.author}
                  onChange={handleChange}
                />
                <label for="Cover">Cover Page:</label>
                <input
                  type="text"
                  id="Cover"
                  name="cover"
                  value={props.data.cover}
                  onChange={handleChange}
                />
                <label for="EBook">E-Book Link:</label>
                <input
                  type="text"
                  id="EBook"
                  name="ebook"
                  value={props.data.ebook}
                  onChange={handleChange}
                />
                <label for="subject">Subject Name:</label>
                <select
                  id="subject"
                  name="sub"
                  onChange={e => handleChange(e)}
                >
                  <option value="" selected="selected"> --Please choose an option --</option>
                  <option value="COA">Computer Organisation and Architecture</option>
                  <option value="DSA">Data Structures and Algorithm</option>
                  <option value="DSW">Database Systems and Web</option>
                  <option value="ES">Electrical Science</option>
                  <option value="Maths">Mathematics</option>
                  <option value="OSSP">Operating Systems and Systems Programming</option>
                  <option value="Phy">Physics</option>
                  <option value="SDF">Software Development Fundamentals</option>
                </select>
                <label for="Price">Price:</label>
                <span class="rupee-img">&#8377;</span>
                <input
                  type="number"
                  id="Price"
                  name="Price"
                  value={ref.Price}
                  onChange={handleRef}
                />
              </fieldset>
              <button type="submit" onClick={functionCall} class="add-book">
                Add Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
