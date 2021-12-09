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

  const [currSub, setCurrSub] = useState("All");

  const handleChange = (e) => {
    setCurrSub(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const def = {
    id: "",
    author: "",
    title: "",
    cover: "",
    ebook: "",
    sub: "",
    UserPrice: {
      listPrice: 0,
      sellPrice: 0,
      user: "",
    },
  };

  const [bookData, setBookData] = useState(def);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const addBook = () => {
    if (bookData.cover === "") {
      bookData.cover =
        "https://trello.com/1/cards/61b1911e190914796fae32c3/attachments/61b1911e190914796fae32cf/previews/61b1911f190914796fae32d5/download/COVER_FOR_THE_STUDY_MATERIAL.png";
    }
    const data = {
      id: Date.now(),
      Author: bookData.author,
      Title: bookData.title,
      Cover: bookData.cover,
      EBook: bookData.ebook,
      Subject: bookData.sub,
      UserPrice: bookData.UserPrice,
    };
    setDoc(doc(ref), data);
    togglePopup();
    setBookData(def);
  };

  useEffect(() => {
    getDocs(ref).then((snapshot) => {
      snapshot.forEach((doc) => {
        // console.log(doc.id, ' => ' , doc.data());
        setDocs((d) => {
          return [...d, doc.data()];
        });
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
        p1={"Resources"}
        p2={"Get all the material here"}
        image={documents}
      />
      <fieldset className="filter-search">
        <label for="subject" className="search">
          Search by Subject:
        </label>
        <select
          id="subject"
          name="sub"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="All" selected="selected">
            {" "}
            All{" "}
          </option>
          <option value="COA">Computer Organisation and Architecture</option>
          <option value="DSA">Data Structures and Algorithm</option>
          <option value="DSW">Database Systems and Web</option>
          <option value="ES">Electrical Science</option>
          <option value="Maths">Mathematics</option>
          <option value="OSSP">
            Operating Systems and Systems Programming
          </option>
          <option value="Phy">Physics</option>
          <option value="SDF">Software Development Fundamentals</option>
        </select>
      </fieldset>

      <div className="container-doc">
        {currSub === "All"
          ? docs.map((doc) => (
              <div className="sub-container">
                <BookCard
                  key={doc.id}
                  title={doc.Title}
                  author={doc.Author}
                  rupess="&#x20B9;"
                  images={doc.Cover}
                  bookLink={doc.EBook}
                  originalPrice={doc.UserPrice.listPrice}
                  newPrice={doc.UserPrice.sellPrice}
                  userMail={doc.UserPrice.user}
                />
              </div>
            ))
          : docs.map(
              (doc) =>
                doc.Subject === currSub && (
                  <div className="sub-container">
                    <BookCard
                      key={doc.id}
                      title={doc.Title}
                      author={doc.Author}
                      rupess="&#x20B9;"
                      images={doc.Cover}
                      bookLink={doc.EBook}
                      originalPrice={doc.UserPrice.listPrice}
                      newPrice={doc.UserPrice.sellPrice}
                      userMail={doc.UserPrice.user}
                    />
                  </div>
                )
            )}
      </div>
      <div className="float" onClick={togglePopup}>
        <img src={Add} className="my-float" />
      </div>
    </div>
  );
};

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
