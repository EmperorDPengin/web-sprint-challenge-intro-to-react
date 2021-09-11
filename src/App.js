import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { BASE_URL } from './constants';
import Character from './components/Character';
import './App.css';

const StyledCharacterContainer = styled.div`
    width: 90%;
    margin: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    border: silver double 10px;
    background-color: grey;
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersData, setCharactersData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect( () => {
    axios.get(`${BASE_URL}`)
    .then( res => {
      console.log(res);
      setCharactersData(res.data);
    })
    .catch( err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledCharacterContainer>
        {charactersData.map( (character , idx) => {
          return <Character characterInfo={character} key={idx} />
        }
        )}
      </StyledCharacterContainer>
    </div>
    
  );
}

export default App;
