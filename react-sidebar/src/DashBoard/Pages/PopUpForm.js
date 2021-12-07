import React from "react";
import "./form.css";

export default function PopUpForm(props) {
  const data = props.data;

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
                <input type="text" id="Title" name="Title" />
                <label for="Author">Book Author:</label>
                <input type="text" id="Author" name="Author" />
                <label for="Cover">Cover Page:</label>
                <input type="text" id="Cover" name="Cover" />
                <label for="E-Book">E-Book Link:</label>
                <input type="text" id="E-Book" name="E-Book" />
                <label for="subjectID">Subject Id:</label>
                <input type="text" id="subjectID" name="subjectID" />
              </fieldset>
              <fieldset>
                <legend>
                  <span class="number">2</span> Some more details
                </legend>
                <label for="Tags">Tags:</label>
                <textarea id="Tags" name="Tags"></textarea>
                <label for="Price">Price:</label>
                <span class="rupee-img">&#8377;</span>
                <input type="number" id="Price" name="Price" />
              </fieldset>

              <button type="submit">Add Book</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
