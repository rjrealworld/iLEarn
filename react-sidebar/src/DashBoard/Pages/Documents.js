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
  const [formData, setFormData] = useState({
    'id': '',
    'author': '',
    'title': '',
    'cover': '',
    'ebook': '',
    'subId': '',
    'tags': [],
    'userPrice': [{
      'price': '',
      'user': ''
    }]
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const addBook = () => {
    setDoc(doc(db, "books", formData.id), {
      'Author': formData.author,
      'Title': formData.title,
      'Cover': formData.cover,
      'E-Book': formData.ebook,
      'SubjectID': formData.subId,
      'Tags': formData.tags,
      'User-Price': formData.userPrice,
    });
  }

  useEffect(() => {
    getDocs(ref)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, ' ' , doc.data());
          setDocs(d => {
            return [...d, {'id': doc.id, 'data': doc.data()}];
          })
        });
    });
    console.log(docs);    
  }, []);

  return (
    <div>
      {isOpen && <Popup handleClose={togglePopup} data={formData} setForm={setFormData} addData={addBook} />}
      {/* <h1>Documents</h1> */}
      <CenterBar p1={'Reference Books'} p2={"Get all the material here"} image={documents}/>
      <div className="container-doc">
        <div className="row-book">
          {docs.map((doc) => (
            <BookCard
              title={doc.data.Title}
              author={doc.data.Author}
              rupess="&#x20B9;"
              originalPrice="550"
              newPrice="200"
              alt={doc.id}
              images={doc.data.Cover}
            />
          ))}
        </div>
      </div>
      <div className="float" onClick={togglePopup}>
        <img src={Add} className="my-float" />
      </div>
    </div>
  );
}


const Documents = MotionHoc(DocumentsComponent);

export default Documents;
