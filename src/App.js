import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Details from './components/Details'

function App() {
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    console.log('making an api request!')
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;