import React from "react";

const ButtonMailto = ({ mailto }) => {
  return (
    <a href={mailto} rel="noreferrer">
      <img
        src="https://img.icons8.com/material-outlined/24/000000/mail.png"
        alt="contact"
      />
    </a>
  );
};

export default ButtonMailto;
