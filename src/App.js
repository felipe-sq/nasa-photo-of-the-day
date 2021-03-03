import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import "./styles.less"
import Details from "./Details"

function App() {
  // const [photo, setPhoto] = useState([])

  // useEffect(() => {
  //   console.log('making an api request!')
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  //     .then(response => console.log(response.data))
  //     .catch(err => console.log(err))
  // }, [])

  // moved above code to its own component on Details.js

  return (
    <div className="App">
      <h1>Enjoy the NASA Photo of the Day!</h1>
      <Details />
    </div>
  );
}

export default App;
