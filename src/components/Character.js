// Write your Character component here
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Details from './Details';


const StyledCharacter = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: ${pr => pr.theme.blackColor};
    border-radius: 0 0 10px 0;
    margin-top: 1rem;
    padding: 0.5rem 0;
    color: ${pr => pr.theme.primaryColor};

    p {
        width: 80%;
        text-align: left;
        margin: 0;
        padding-left: 0.5rem;
    }

    button{
        display: inline-block;
        border: silver solid 1px;
        text-decoration:none;
        background: none;
        font-size: 1.6rem;
        margin-right: 1.5rem;
        border-radius: 10px;
        color: ${pr => pr.theme.primaryColor};
    
        &:hover {
            background: ${pr => pr.theme.primaryColor};
            color: ${pr => pr.theme.blackColor};
        }    
    
    }
`


export default function Character({characterInfo}) {

    const [ showDetails, setShowDetails] = useState(false);

    const openDetails = () => {
       setShowDetails(!showDetails);
    }
    return (
        <StyledCharacter>
            <p>{characterInfo.name}</p>
            <button onClick={openDetails}>{characterInfo.birth_year}</button>
            { 
            showDetails && <Details info={characterInfo} />
            }
        </StyledCharacter>
    )
}