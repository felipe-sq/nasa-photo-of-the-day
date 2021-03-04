import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'

// added styled components for Module 4 project

export default function Details() {
    const [details, setDetails] = useState([])

    useEffect(() => {
        console.log('calling the api photo!')
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
          .then(({data}) => setDetails(data))
          .catch(err => console.log(err))
      }, [details])

    return (
        <PicContainer>
            <h2>{details.title}</h2>
            <ImgContainer>
                <img src={details.url} alt="NASA pic of the day"></img>
            </ImgContainer>
            <h4>Date: {details.date}</h4>
            <p className="p-text">Description: {details.explanation}</p>
        </PicContainer>

    )
}

const PicContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    border: 1px solid midnightblue;
    background-color: dodgerblue;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
`;

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid midnightblue;
    border-radius: 8px;
    background-color: aqua;
    width: auto;
    margin: 4px 10px 4px 10px;  
`;
