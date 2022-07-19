import React from 'react';
import styled from 'styled-components';
import  { GrAdd } from 'react-icons/gr';

const Composestyles = styled.div`
display: flex ;
width: 150px;
background-color: #fff;
align-items: center;
padding: 6px 32px 6px 8px;
border-radius: 50px;
box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);
cursor:pointer;
gap:10px;
color:#3c4043;
font-weight:500;
font-size: 2rem;
transition : box-shadow .08s linear, min-width .15s cubic-bezier(0.4, 0.0, 0.2, 1);

:hover{
box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0%), 0 4px 8px 3px rgba(60, 64, 67, 15%);
background-color:#fafafb;
}
`
const Compose = () => {
    return(
        <Composestyles>
         <GrAdd />
         <p>   Compose</p>
        </Composestyles>
    )
} 

export default Compose;