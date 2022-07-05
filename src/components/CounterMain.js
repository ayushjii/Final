import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CountStyles = styled.div`
letter-spacing: 5px;
margin:  30px;

span{
  color: red;
  font-size:5rem;
  display:flex;
  justify-content:center;
}
h1{
  color: blue;
  text-transform: capitalize;
  font-size: 3rem;
  padding-top:10px;
  display:flex;
  justify-content:center;
}
`

const Count = ({
  BaseHeading="Depends",
    Number="53219",
    duration="2"
}) => {
  const [count, setCount] = useState("0")

  useEffect(() => {
    let start = 0;

    const end = parseInt(Number.substring(0,3))

    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + Number.substring(3))
      if (start === end) clearInterval(timer)       
    }, incrementTime);

  }, [Number, duration]);

  return (
    <CountStyles>
      <ul>
        <li>
          <span>{count}</span>
          <h1>{BaseHeading}</h1>
        </li>
      </ul>
      </CountStyles>
  );
}

export default Count;