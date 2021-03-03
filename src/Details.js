import React, { useState, useEffect } from "react";
import axios from 'axios'
// import './styles.less'

export default function Details() {
    const [details, setDetails] = useState([])

    useEffect(() => {
        console.log('calling the api photo!')
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
          .then(({data}) => setDetails(data))
          .catch(err => console.log(err))
      }, [])

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

    
    // const nasaImg = document.createElement('img')
    // nasaImg.src = details.url
    // console.log(nasaImg)

    return (
        <div className="container">
            <h2>Title: {details.title}</h2>
            {/* <span className='img-container'>{details.url}</span> */}
            <div className="img-container">
                <img src={details.url} alt="NASA pic of the day"></img>
            </div>
            <h4>Date: {details.date}</h4>
            <p>Details: {details.explanation}</p>

        </div>

    )
}