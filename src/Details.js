import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'

// import './styles.less'
// attempted to use less for styling but was not successful -- this was 
// prior to the module 4 assignment work.

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

const PicContainer = styled.div`
    
`;

// .container {
//     border: 1px solid rgb(228, 42, 42);
//     background-color: dodgerblue;
//     box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
//     border-radius: 8px;
//     margin: 16px;
//     padding: 16px 8px 12px 16px;
//   }
//   .img-container {
//     background-color: aqua;
//     width: 60%;
//     display: flex;
//     justify-content: space-between;
//     margin: 4px 0 4px 0;
//   }
//   button {
//     border-radius: 4px;
//   }