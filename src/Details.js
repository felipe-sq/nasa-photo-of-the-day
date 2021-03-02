import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Details() {
    const [details, setDetails] = useState([])

    // useEffect(() => {
    //     console.log('calling the api photo!')
    //     axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    //       .then(({data}) => setDetails(data))
    //       .catch(err => console.log(err))
    //   }, [])
    // useEffect(() => {
    //   console.log('calling the api date')
    //   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    //     .then(({data}) => setDate(data.date))
    //     .catch(err => console.log(err))
    // }, [])
    // useEffect(() => {
    //   console.log('calling the api explanation!')
    //   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    //     .then(({data}) => setExplanation(data.explanation))
    //     .catch(err => console.log(err))
    // }, [])


    return (
        <div className="container">
            <span className="img-container">Placeholder Image Text{details.photo}</span>
            <h4>Date: {details.date}</h4>
            <p>Details: {details.explanation}</p>

        </div>

    )
}