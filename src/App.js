import "./App.css";
import { useState, useEffect } from "react";
import { CLIENT_URL } from "./services/rando_user";
import axios from "axios";

function App() {
  const [userDataName, setUserDataName] = useState([]);

  const [userDataEmail, setUserDataEmail] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    try {
      const response = await axios.get(CLIENT_URL);
      const title = response.data.results[0].name.title;
      const name = response.data.results[0].name.first;
      const last = response.data.results[0].name.last;
      console.log(name);
      setUserDataName(title + " " + name + " " + last);
      const email = response.data.results[0].email;
      console.log(email);
      setUserDataEmail(email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchUserData}>Click to Refresh</button>
      <h1>{userDataName}</h1>
      <h2>{userDataEmail}</h2>
    </div>
  );
}

export default App;
