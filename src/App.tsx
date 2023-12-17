import React, { useState } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import axios from 'axios';
import PetsIcon from '@mui/icons-material/Pets';
import Popup from 'reactjs-popup';


function App() {
  const [facts, setFacts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    fetchData(); // Call fetchData after successful login
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dogapi.dog/api/facts/?number=5');
      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        setFacts(data.facts);
      }
    } catch (error) {
      console.error('Error fetching facts: ', error);
    }
  };

  const regenerate = () => {
    fetchData();
  }

  return (
    <div className="container">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div>
          <h1>Facts about dogs</h1>
          <table>
            <thead>
            </thead>
            <tbody>
            {facts.map((fact, index) => (
              <React.Fragment key={index + 1}>
                <tr>
                  <td><PetsIcon /></td>
                  <td>{fact}</td>
                </tr>
                <tr>
                  <td colSpan={2}><br /></td>
                </tr>
              </React.Fragment>
            ))}


            </tbody>
          </table>
          <button onClick={regenerate}>Regenerate</button>
          <Popup trigger=
                {<button> Documentation </button>}>
               <div>
               <h3>This is an Vite-app that tells you five facts about dogs. It uses dogapi- api and fetches 5 facts from there and you can regenerate facts.\nIt uses Firebase for authentication.And it have been tested with Google Chrome, Edge and with iPhone 12 Pro. It loads data in about 150ms..</h3>
               </div>
            </Popup>
        </div>
      )}
    </div>
  );
}

export default App;
