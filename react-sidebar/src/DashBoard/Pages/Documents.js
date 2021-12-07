import React, { useState, useEffect } from "react";
import MotionHoc from "./MotionHoc";
import "./Document.css";
import Add from "../../assets/Add.svg";
import db from "../.././firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import BookCard from "../Cards/BookCard";

const DocumentsComponent = () => {
  const ref = collection(db, "books");
  const [docs, setDocs] = useState([]);

  const handleClick = ({}) => {
    // console.log("clicked");
    setDoc(doc(db, "books", "Book-t"), {
      'Author': "Author-temp",
      'Title': "Book-temp",
      'Cover': "",
      'E-Book': "",
      'SubjectID': "",
      'Tags': ["#pdf", "book"],
      'Title': "Book-temp-title",
      'User-Price': [{'Price': 800, 'User': "Anonymous"}, {'Price': 650, 'User': "Anon"}],
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
      <h1>Documents</h1>
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
      <div className="float" onClick={handleClick}>
            <img src={Add} className="my-float" />
      </div>
    </div>
  );
}


const Documents = MotionHoc(DocumentsComponent);

export default Documents;
