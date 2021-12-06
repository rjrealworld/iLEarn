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
    onSnapshot(ref, (snapshot) => {
      const t = [];
      snapshot.forEach(doc => {
        t.push(doc.data());
      });
      setDocs(t);
    });
    console.log(docs);
  }, []);

  return (
    <div>
      <h1>Documents</h1>
      <div className="container-doc">
        <div className="row-book">
          <BookCard
            title="Advanced Engineering Mathematics"
            images="https://images-na.ssl-images-amazon.com/images/I/41466wS8dYL.jpg"
            originalPrice="550"
            newPrice="200"
            rupess="&#x20B9;"
            alt="Book1"
            author="R.K. Jain & S.R.K. Iyenger"
          />
          <BookCard
            title="Advanced Engineering Mathematics"
            images="https://images-na.ssl-images-amazon.com/images/I/41466wS8dYL.jpg"
            originalPrice="550"
            newPrice="200"
            rupess="&#x20B9;"
            alt="Book2"
            author="R.K. Jain & S.R.K. Iyenger"
          />
          <BookCard
            title="Advanced Engineering Mathematics"
            images="https://images-na.ssl-images-amazon.com/images/I/41466wS8dYL.jpg"
            originalPrice="550"
            newPrice="200"
            rupess="&#x20B9;"
            alt="Book3"
            author="R.K. Jain & S.R.K. Iyenger"
          />
          <BookCard
            title="Advanced Engineering Mathematics"
            images="https://images-na.ssl-images-amazon.com/images/I/41466wS8dYL.jpg"
            originalPrice="550"
            newPrice="200"
            rupess="&#x20B9;"
            alt="Book4"
            author="R.K. Jain & S.R.K. Iyenger"
          />
        </div>
      </div>
    </div>
    // {/* {docs.map((doc) => (
    //     <div>
    //       <h2>{doc.title}</h2>
    //       <p>{doc.author}</p>
    //       <p>{doc.subId}</p>
    //     </div>
    // ))} */}
  );
}


const Documents = MotionHoc(DocumentsComponent);

export default Documents;
