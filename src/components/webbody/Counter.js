import React from 'react';
import styled from 'styled-components';
import Count from '../CounterMain';

const CounterStyles=styled.div`
margin: 15rem 30px;
display:flex;
justify-content:center;
column-gap: 10rem;
max-width:100%;
flex-direction:row;

@media only screen and (max-width:920px) {
flex-direction:column;
}
`

export default function CounterHome() {
    return(
        <CounterStyles>
        <div>
          <Count
            BaseHeading='Life Saved'
            Number="1678"
            />
        </div>
        <div>
            <Count
            BaseHeading='Our Contributers'
            Number='386888'
            />
        </div>
        <div>
            <Count
            BaseHeading='Items Covered'
            Number='768'
            />
        </div>
        </CounterStyles>
    );
}
