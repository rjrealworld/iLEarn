import React, { useState, useEffect } from "react";
import MotionHoc from "./MotionHoc";
import "./Document.css";
import Add from "../../assets/Add.svg";
import db from "../.././firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import BookCard from "../Cards/BookCard";
import Popup from "./PopUpForm";
import CenterBar from "./Dashboard/CenterBar";
import documents from "../../assets/documents.svg";

const DocumentsComponent = () => {
  const ref = collection(db, "books");
  const [docs, setDocs] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  
  const def = {
    "id": "",
    "author": "",
    "title": "",
    "cover": "",
    "ebook": "",
    "sub": "",
    "UserPrice": {
        "Price": 0,
        "user": "",
      },
  };

  const [bookData, setBookData] = useState(def);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const addBook = () => {
    if(bookData.cover === "") {
      bookData.cover = "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-5-CRC.png";
    }
    const data = {
      "id": Date.now(),
      "Author": bookData.author,
      "Title": bookData.title,
      "Cover": bookData.cover,
      "EBook": bookData.ebook,
      "Subject": bookData.sub,
      "UserPrice": bookData.userPrice,
    };
    setDoc(doc(ref), data);
    togglePopup();
    setBookData(def);
  }

  useEffect(() => {
    getDocs(ref)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          // console.log(doc.id, ' => ' , doc.data());
          setDocs((d) => {
            return [...d, doc.data()];
          })
        });
    });
  }, []);

  return (
    <div>
      {isOpen && (
        <Popup
          handleClose={togglePopup}
          data={bookData}
          setData={setBookData}
          addData={addBook}
        />
      )}
      <CenterBar
        p1={"Reference Books"}
        p2={"Get all the material here"}
        image={documents}
      />
      <div className="container-doc">
        {docs.map((doc) => (
          <BookCard
            title={doc.Title}
            author={doc.Author}
            rupess="&#x20B9;"
            images={doc.Cover}
            bookLink={doc.EBook}
            originalPrice={doc.UserPrice.Price}
            newPrice={doc.UserPrice.Price}
            userMail={doc.UserPrice.user}
          />
        ))}
      </div>
      <div className="float" onClick={togglePopup}>
        <img src={Add} className="my-float" />
      </div>
    </div>
  );
}


const Documents = MotionHoc(DocumentsComponent);

export default Documents;
