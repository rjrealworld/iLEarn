import React, { useState, useEffect } from "react";
import MotionHoc from "./MotionHoc";
import "./Document.css";
import db from "../.././firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import BookCard from "../Cards/BookCard";

const DocumentsComponent = () => {
  const ref = collection(db, "books");
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // const t = [];    
    getDocs(ref)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          // console.log(doc.data());
          // t.push(doc.data());
          setDocs(d => {
            return [...d, doc.data()];
          })
        });
        // console.log(docs);
    });
    // setDocs(t);
    console.log(docs);    
  }, []);

  return (
    <div>
      <h1>Documents</h1>
      <div className="container-doc">
        <div className="row-book">
          {docs.map((doc) => (
            <BookCard
              title={doc.Title}
              author={doc.Author}
              rupess="&#x20B9;"
              originalPrice="550"
              newPrice="200"
              alt={doc.Title}
              images={doc.Cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


const Documents = MotionHoc(DocumentsComponent);

export default Documents;
