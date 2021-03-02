import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Details(props) {
    const { photo, date, explanation } = props
    const [photos, setPhoto] = useState([])

    useEffect(() => {
      console.log('making an api request!')
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <img>{photo}</img>
            <h2>Date: {}</h2>

        </div>

    )
}