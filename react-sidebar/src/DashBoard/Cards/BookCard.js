import React from 'react';
import "./BookCard.css";

export default function BookCard(props) {
    let newClassName = `colorBg ${props.alt}`;
    let bgImg = `url(${props.images})`;
    let { title, originalPrice, newPrice, rupess, author } = props;

    return (
      <div className="BookCard">
        <div className="wrapper">
          <div className={newClassName}></div>
          <div className="cardImg" style={{ backgroundImage: bgImg }}></div>
          <div className="cardInfo">
            <h1>{title}</h1>
            <p className="date">{author}</p>
            <div className="action">
              <div className="priceGroup">
                <p className="price oldPrice">
                  {rupess}
                  {originalPrice}
                </p>
                <p className="price newPrice">
                  {rupess}
                  {newPrice}
                </p>
              </div>
              <div className="contact">
                <img
                  src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-contacts-strategy-flatarticons-blue-flatarticons.png"
                  alt="contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
