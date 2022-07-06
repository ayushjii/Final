import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';

const MoreStyles = styled.div`
margin: 0 30% 3rem 30%;
.form-group{
    width:100%;
    margin: 2rem 0 ;
}
label {
    font-size : 1.8rem;
}
input,
textarea{
    width:100%;
    font-size: 2rem;
    padding:1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline:none;
    border:none;
    border-radius:8px;
    margin-top:1rem;
}

textarea{
    min-height: 150px;
    resize:vertical;
}
button[type="submit"]{
    background-color: var(--gray-1);
    color: var(--black);
    font-size:2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius:8px;
    cursor:pointer;
}

button:hover{
    background-color: #71e86d ;
}
@media only screen and (max-width:768px){
    margin: 0 20% 3rem 20%;
}
`

export default function Moreitems() {
    const [more, setItem] = useState('');
    const {aboutit, setAbout} = useState('');
    return(
        <MoreStyles>
            <SectionTitle
               subheading= "Did'n Find The item You Want "
               heading='Add more items'
               />
               <div className="form-group">
               <label htmlFor='item'>
               Name of item
               <input 
                 type="name" 
                 id='item'
                 value={more}
                 onChange={(e) => setItem(e.target.value)}
                />
               </label>
               </div>
               <div className="form-group">
               <label htmlFor='about'>
               About It
               <textarea
                 type="message" 
                 id='about'
                 name='message'
                 value={aboutit}
                 onChange={(e) => setAbout(e.target.value)}
                />
               </label>
               </div>
               <button type="submit">SUBMIT</button>
        </MoreStyles>
    );
}