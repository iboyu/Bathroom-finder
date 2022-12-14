import "../App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function FirebaseTest() {
  // set users
  const [newName, setName] = useState("");
  const [newAge, setAge] = useState(0);
  // fetch users
  const [users, setUsers] = useState([]);
  const usersCollectionsRef = collection(db, "users");
  // refresh data every time a button is clicked.
  const [isSending, setIsSending] = useState(false);

  const createUser = async () => {
    await addDoc(usersCollectionsRef, { name: newName, age: Number(newAge) });
    sendRequest();
  };

  const updateUser = async (id, age) => {
    const currentUserDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(currentUserDoc, newFields);
    sendRequest();
  };

  const deleteUser = async (id) => {
    const currentUserDoc = doc(db, "users", id);
    await deleteDoc(currentUserDoc);
    sendRequest();
  };

  //Use effect hooks are called as soon as the page renders.
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionsRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const sendRequest = async () => {
    if (isSending == true) {
      return;
    } else {
      setIsSending(true);
      const data = await getDocs(usersCollectionsRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsSending(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <input
          placeholder="Age"
          type={"number"}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        ></input>
        <button onClick={createUser}>Create User</button>
        {users.map((user) => {
          return (
            <div>
              Name: {user.name}
              <br />
              Age: {user.age}{" "}
              <button
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
              >
                Increase Age
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default FirebaseTest;
