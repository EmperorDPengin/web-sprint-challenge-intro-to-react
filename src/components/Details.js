import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
    width: 100%;
    text-align: left;
    border-top: red solid 1px;
    margin-top: 0.5rem;
    font-size: 1.3rem;
`


export default function Details({info}){
    return(
        <StyledDetails>
            <p>gender: {info.gender}</p>
            <p>Height: {info.height}</p>
            <p>Mass: {info.mass}</p>
            <p>Birth Year: {info.birth_year}</p>
            <p>Eye Color: {info.eye_color}</p>
            <p>Hair Color: {info.hair_color}</p>
            <p>Skin Color: {info.skin_color}</p>
        </StyledDetails>
        
    )
} 
