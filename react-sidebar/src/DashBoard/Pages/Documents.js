import React, { useState, useEffect } from "react";
import MotionHoc from "./MotionHoc";
import db from "../.././firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

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
      {/* {docs.map((doc) => (
          <div>
            <h2>{doc.title}</h2>
            <p>{doc.author}</p>
            <p>{doc.subId}</p>
          </div>
      ))} */}
    </div>
  );
}


const Documents = MotionHoc(DocumentsComponent);

export default Documents;
