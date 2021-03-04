import React, { useState, useEffect } from "react";
import "./App.css";
import Details from "./Details"
import styled from 'styled-components'

function App() {

  return (
    <AppDiv>
      <h1>Enjoy the NASA Photo of the Day!</h1>
      <Details />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  text-align: center;
  font-size: calc(7px + 2vmin)
`;