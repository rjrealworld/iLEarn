import React from 'react'
import "./form.css"

export default function PostForm(props) {

    const handleChange = (e) => {
      props.setPost((p) => ({ ...p, [e.target.name]: e.target.value }));
    };

    const functionCall = (e) => {
      e.preventDefault();
      props.addPost(props.data);
    }

    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>
            X
          </span>
          <div class="row">
            <div class="col-md-12">
              <form className="PopupForm">
                <h1> Add Project </h1>
                <fieldset>
                  <legend>
                    <span class="number">1</span>Basic Info
                  </legend>
                  <label for="proj">Project Name:</label>
                  <input
                    type="text"
                    id="proj"
                    name="name"
                    value={props.data.name}
                    onChange={handleChange}
                  />
                  <label for="link">Project Link:</label>
                  <input
                    type="text"
                    id="link"
                    name="link"
                    value={props.data.link}
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
                <button 
                    type="submit"  
                    onClick={functionCall}
                    class="add-book">
                  Add Book
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
