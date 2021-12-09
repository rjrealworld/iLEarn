import React, {useState, useEffect} from "react";
import MotionHoc from "./MotionHoc";
import db from "../.././firebase";
import Add from "../../assets/Add.svg";
import { useAuth } from "../../contexts/AuthContext";
import { serverTimestamp } from "firebase/firestore";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import Query from "../Cards/Query";
import QueryForm from "./QueryForm";
import "./Team.css";

const ProjectsComponent = () => {
  const ref = collection(db, "query");
  const [queryList, setQueryList] = useState([]);

  const { currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const def = {
    id: "",
    name: "",
    email: "",
    user: "",
    dispImg: "",
    desc: "",
    sshot: "",
    time: "",
  };

  const [query, setQuery] = useState(def);

  const addQuery = () => {
    const data = {
      id: Date.now(),
      name: query.name,
      email: currentUser.email,
      user: currentUser.displayName,
      dispImg: currentUser.photoURL,
      desc: query.desc,
      sshot: query.sshot,
      time: serverTimestamp(),
    };
    setDoc(doc(ref), data);
    togglePopup();
    setQuery(def);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getDocs(ref).then((snapshot) => {
      snapshot.forEach((doc) => {
        setQueryList((d) => {
          return [...d, doc.data()];
        });
      });
    });
  }, []);

  return (
    <div>
      {/* <h1>Query Section</h1> */}
      {isOpen && (
        <QueryForm
          handleClose={togglePopup}
          data={query}
          addQuery={addQuery}
          setQuery={setQuery}
        />
      )}

      {/* <Query
        username="Riya Jain"
        userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVzfQ0dNV81i_D80HcVsJg-QUF4YGb0oqig&usqp=CAU"
        timestamp="08/12/2021 at 6:54:00 PM GMT"
        desc="This is a test post"
        img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      /> */}
      <div className="feed">
        {queryList.map((q) => {
          return (
            <Query
              key={q.id}
              username={q.user}
              userImg={q.dispImg}
              timestamp={q.time.toDate().toLocaleString()}
              desc={q.desc}
              img={q.sshot}
              email={q.email}
            />
          );
        })}
      </div>
      <div className="float" onClick={togglePopup}>
        <img src={Add} className="my-float" />
      </div>
    </div>
  );
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;
