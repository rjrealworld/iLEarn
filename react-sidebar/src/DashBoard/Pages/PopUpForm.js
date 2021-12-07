import React from "react";
import "./form.css";

export default function PopUpForm(props) {

  const [tags, setTags] = React.useState([]);

  

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
                  name="Title"
                  value={props.data.title}

                />
                <label for="Author">Book Author:</label>
                <input
                  type="text"
                  id="Author"
                  name="Author"
                  value={props.data.author}
                />
                <label for="Cover">Cover Page:</label>
                <input
                  type="text"
                  id="Cover"
                  name="Cover"
                  value={props.data.cover}
                />
                <label for="E-Book">E-Book Link:</label>
                <input
                  type="text"
                  id="E-Book"
                  name="E-Book"
                  value={props.data.ebook}
                />
                <label for="subjectID">Subject Id:</label>
                <input
                  type="text"
                  id="subjectID"
                  name="subjectID"
                  value={props.data.subID}
                />
              </fieldset>
              <fieldset>
                <legend>
                  <span class="number">2</span> Some more details
                </legend>
                <label for="Tags">Tags:</label>
                <input type="text" id="Tags" name="Tags" />
                <label for="Price">Price:</label>
                <span class="rupee-img">&#8377;</span>
                <input type="number" id="Price" name="Price" />
              </fieldset>

              <button type="submit" onClick={props.addData}>Add Book</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
