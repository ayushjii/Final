import React from 'react';
import styled from 'styled-components';
import AllCards from './AllCards';

const Allstyles=styled.div`
 margin: 5rem;
h1{
 font-size: 3rem;
 margin-bottom: 8px;
 color:#000;
}
.allonsame{
    display:flex;
    justify-content:start;
    flex-wrap:wrap;
}
.search-box {
        display: flex;
        align-items:center;
        justify-content:center;
        border-radius:16px;
        overflow:hidden;
        width:100%;
        max-width:480px;
        margin-bottom:16px;
        transition:0.4s;
}

.search-box input {
         display:block;
         appearance:none;
         outline:none;
         border:none;
         padding:16px;
         width:100%;
         transition:0.4s;
}

.search-box:focus-within{
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}
.allheading{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
}
`
export default function Allitem() {
    return(
        <Allstyles>
         <div className='allheading'>
           <h1>All Blogs Are Here</h1>
           <form className="search-box">
                    <input type="search" placeholder="What are you looking for?"/>
                </form>
         </div>
         <div className='allonsame'>
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
            <AllCards />
         </div>
        </Allstyles>
    );
}