import React from 'react';
import styled from "styled-components";

const SearchStyles =styled.div`
${'' /* margin: 5rem 0 ; */}
    box-sizing:border-box;
    font-family:'Fira Sans',sans-serif;
    display:flex;
    flex-direction:column;
    justify-content:center;
    min-height:100vh;

header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
}

.hone{
    color:#888;
    font-size: 42px;
    text-transform:uppercase;
    text-align: center;
    margin-bottom: 16px;
}

.search-box {
        display:flex;
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
.results{
    max-width:100%;
    margin: 0 auto;
}

.result{
    width:100%;
    padding:16px;
    background-color:#FFF;
    border-radius:16px;
    transition:0.4s;
}
.result:hover{
    box-shadow:3px 3px 6px rgba(0,0,0,0.2);
}
.result h3{
    color:#888;
    font-size:28px;
    margin-bottom:16px;
}

.result p{
    color:#313131;
    font-size: 18px;
    margin-bottom: 16px;
}

.result a{
    display:inline-block;
    padding:12px 16px;
    background-color:#A84FFF;
    color:#FFF;
    font-weight:700;
    text-decoration:none;
    border-radius: 12px;
    transition: 0.4s;
} 

.result a:hover{
    background-color: #ff4fa8;
}
`

export default function search(){
    return(
        <SearchStyles >
            <header>
                <h1 className="hone">search bar</h1>
                <form className="search-box">
                    <input type="search" placeholder="What are you looking for?"/>
                </form>
                <p>Search Results:0</p>
            </header>
            <div className="results">
                <div className="result">
                    <h3>Title Goes Here</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro,
                        reiciendis.
                    </p>
                    <a href="/"> Read more </a>
                </div>
            </div>
        </SearchStyles>
    );
 }