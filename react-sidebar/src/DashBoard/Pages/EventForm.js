import React from "react";
import "./form.css";

export default function EventForm(props) {
  const handleChange = (e) => {
    props.setData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const functionCall = (e) => {
    e.preventDefault();
    props.addData();
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
              <h1> New Event </h1>
              <fieldset>
                <label for="Event">Event Name:</label>
                <input
                  type="text"
                  id="Event"
                  name="name"
                  value={props.data.name}
                  onChange={handleChange}
                />
                <label for="org">Orgnaised By:</label>
                <input
                  type="text"
                  id="org"
                  name="orgBy"
                  value={props.data.orgBy}
                  onChange={handleChange}
                />
                <label for="poster">Poster:</label>
                <input
                  type="text"
                  id="poster"
                  name="poster"
                  value={props.data.poster}
                  onChange={handleChange}
                />
                <label for="stDate">Start:</label>
                <input
                  type="datetime-local"
                  id="stDate"
                  name="start"
                  value={props.data.start}
                  onChange={handleChange}
                />
                <label for="endDate">End:</label>
                <input
                  type="datetime-local"
                  id="endDate"
                  name="end"
                  value={props.data.end}
                  onChange={handleChange}
                />
                <label for="venue">Venue:</label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={props.data.venue}
                  onChange={handleChange}
                />
                <label for="desc">Description:</label>
                <textarea
                  id="desc"
                  name="description"
                  value={props.data.description}
                  onChange={handleChange}
                />
              </fieldset>
              <button type="submit" onClick={functionCall} class="add-book">
                Add Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
