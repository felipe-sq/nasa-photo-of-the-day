import React, { useState, useEffect } from "react";
import axios from 'axios'
// import './styles.less'
// attempted to use less for styling but was not successful

export default function Details() {
    const [details, setDetails] = useState([])

    useEffect(() => {
        console.log('calling the api photo!')
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
          .then(({data}) => setDetails(data))
          .catch(err => console.log(err))
      }, [details])

    return (
        <div className="container">
            <h2>{details.title}</h2>
            <div className="img-container">
                <img src={details.url} alt="NASA pic of the day" border='5px solid'></img>
            </div>
            <h4>Date: {details.date}</h4>
            <p className="p-text">Description: {details.explanation}</p>
        </div>

    )
}