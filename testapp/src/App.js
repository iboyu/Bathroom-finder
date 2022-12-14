import "./App.css";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Footer from "./Components/Footer/Footer";
import Mainscreen from "./Components/Mainscreen/Mainscreen";

function App() {
  const [currentPage, setCurrentPage] = useState("");

  function setCurrentScreen(screen) {
    setCurrentPage(screen);
    console.log(currentPage);
  }

  return (
    <div className="App">
      <div>
        <Mainscreen currentPage={currentPage} />
      </div>
      {/* <div>
        <Footer setCurrentScreen={setCurrentScreen} />
      </div> */}
    </div>
  );
}

export default App;
