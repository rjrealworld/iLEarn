import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./profileImage.png";
import './profileImage.css';

function ProfileImage() {
    return (
        <div className="profileImage">
            <ReactRoundedImage
                image={MyPhoto}
                roundedColor="#1E212D"
                imageWidth="46"
                imageHeight="46"
                roundedSize="13"
                borderRadius="46"
                hoverColor="#FFC478"
            />
        </div>
    );

}

export default ProfileImage;