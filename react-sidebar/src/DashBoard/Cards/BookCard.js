import React from 'react';
import "./BookCard.css";
import ButtonMailto from './mailTo';

export default function BookCard(props) {
    // let newClassName = `colorBg ${props.alt}`;
    let bgImg = `url(${props.images})`;
    let { title, originalPrice, newPrice, rupess, author } = props;

    return (
      <div className="BookCard">
        <div className="wrapper">
          {/* <div className={newClassName}></div> */}
          <a href={props.bookLink} rel="noreferrer" target="_blank">
            <div className="cardImg" style={{ backgroundImage: bgImg }} />
          </a>
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
                {console.log(props.userMail)}
                <ButtonMailto mailto={"mailto:"+props.userMail} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
