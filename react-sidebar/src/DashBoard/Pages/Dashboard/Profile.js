import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div class="profile">
      <div class="content">
        <h1>Edit Profile</h1>
        <form action="">
          <div className="field">
            <div class="grid-35">
              <label for="avatar">Your Photo</label>
            </div>
            <div class="grid-65">
              <span class="photo" title="Upload your Avatar!"></span>
            </div>
          </div>
          <div className="field">
            <div class="grid-35">
              <label for="name">Name</label>
            </div>
            <div class="grid-65">
              <input type="text" id="name" tabindex="2" />
            </div>
          </div>
          <div className="field">
            <div class="grid-35">
              <label for="description">About you</label>
            </div>
            <div class="grid-65">
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="auto"
                tabindex="3"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <div class="grid-35">
              <label for="email">Email Address</label>
            </div>
            <div class="grid-65">
              <input type="email" id="email" tabindex="6" />
            </div>
          </div>
          <div className="field">
            <div class="grid-35">
              <label for="phone">Phone Number</label>
            </div>
            <div class="grid-65">
              <input
                type="tel"
                id="phone"
                tabindex="6"
                placeholder="xxxxxxxxxx"
                pattern="[1-9]{1}[0-9]{9}"
              />
            </div>
          </div>
          <div className="field">
            <div class="grid-35">
              <label for="qualification">Year</label>
            </div>
            <div class="grid-65">
              <select name="qualification" id="qualification" tabindex="8">
                <option selected="selected" value="--------------" disabled>
                  --------------
                </option>
                <option value="first-year">1st Year</option>
                <option value="second-year">2nd Year</option>
                <option value="third-year">3rd year</option>
                <option value="fourth-year">4th year</option>
                <option value="fifth-year">5th year</option>
              </select>
            </div>
          </div>
          <div className="field">
            <div class="grid-35">
              <label for="linkedin">LinkedIn URL</label>
            </div>
            <div class="grid-65">
              <input type="text" id="linkedin" tabindex="12" />
            </div>
          </div>
          <div className="field">
            <div class="grid-35">
              <label for="github">Github URL</label>
            </div>
            <div class="grid-65">
              <input type="text" id="github" tabindex="13" />
            </div>
          </div>
          <input type="button" class="Btn cancel" value="Cancel" />
          <input type="submit" class="Btn" value="Save Changes" />
        </form>
      </div>
    </div>
  );
};

// const Home = MotionHoc(HomeComponent);

export default Profile;
