import React from "react";
import "./form.css";

export default function QueryForm(props) {
  const handleChange = (e) => {
    props.setQuery((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const functionCall = (e) => {
    e.preventDefault();
    props.addQuery(props.data);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          X
        </span>
        <div class="row">
          <div class="col-md-12">
            <form className="PopupForm">
              <h1> Add Query </h1>
              <fieldset>
                <label for="proj">Name:</label>
                <input
                  type="text"
                  id="proj"
                  name="name"
                  value={props.data.name}
                  onChange={handleChange}
                />
                <label for="ss">Screenshot:</label>
                <input
                  type="text"
                  id="ss"
                  name="sshot"
                  value={props.data.sshot}
                  onChange={handleChange}
                />
                <label for="desc">Description:</label>
                <textarea
                  id="desc"
                  name="desc"
                  value={props.data.desc}
                  onChange={handleChange}
                />
              </fieldset>
              <button type="submit" onClick={functionCall} class="add-book">
                Add Query
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
