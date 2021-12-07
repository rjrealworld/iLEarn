import React from "react";
import "./form.css";
import {useAuth} from "../../contexts/AuthContext";

export default function PopUpForm(props) {
  // const [price, setPrice] = React.useState();
  const [tagList, setTags] = React.useState([]);
  const {currUser} = useAuth();

  const handleTags = (e) => { 
    setTags(prev => [...prev, e.target.value]);
    props.setData(p => ({...p, 'tags': [...p.tags, tagList]}));
  }

  const handleChange = (e) => {
    props.setData(p => ({...p, [e.target.name]: e.target.value}));
  }

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          X
        </span>
        <div class="row">
          <div class="col-md-12">
            <form action="index.html" method="post" className="PopupForm">
              <h1> Upload </h1>
              <fieldset>
                <legend>
                  <span class="number">1</span>Basic Info
                </legend>
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
                <label for="E-Book">E-Book Link:</label>
                <input
                  type="text"
                  id="E-Book"
                  name="ebook"
                  value={props.data.ebook}
                  onChange={handleChange}
                />
                <label for="subjectID">Subject Id:</label>
                <input
                  type="text"
                  id="subjectID"
                  name="subId"
                  value={props.data.subID}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <legend>
                  <span class="number">2</span> Some more details
                </legend>
                <label for="Tags">Tags:</label>
                <input 
                  type="text" 
                  id="Tags" 
                  name="Tags"                  
                />
                <label for="Price">Price:</label>
                <span class="rupee-img">&#8377;</span>
                <input 
                  type="number" 
                  id="Price" 
                  name="Price" 
                  // value={price} 
                />
              </fieldset>

              <button type="submit" onClick={props.addData}>Add Book</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
