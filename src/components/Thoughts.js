import React from 'react';
import styled from 'styled-components';
import Compose from './Compose';

const ThoughtStyles = styled.div`
margin: 5rem 10rem;
.left{
    text-align:left;
}
.right{
    text-align:center;
     ${'' /* margin:3rem; */}
}
.heading{
    font-size:80px;
    color:#000;
}
.about_dis{
    font-size:25px;
    color: blue;
}
.dis_container{
    display:flex;
    gap: 5rem;
    margin-top:7rem;
    position:relative;
    
}
.dis_image{
    height:300px;
    width:300px;
    border-radius:10px;
    max-width:100%;
    }
    
@media only screen and (max-width: 500px) {
    .dis_container{
        flex-direction:column;
    } 
    .right{
      text_align:center;
    }
}
`
export default function Thought (
    {
    CardImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU',
    dis_heading='hello',
    dis_about='rce  k  l.   w o o oio eow  io oiwe owe  . n; ew; w k. k  /e  kl k    e ee  '
    }
) {
    return(
        <ThoughtStyles>
        <div className='dis_container'>
          <div className='left'>
            <div className='heading'>
                {dis_heading}
            </div>
            <div className='about_dis'>
                {dis_about}
            </div>
          </div>
          <div className='right'>
          <img className='dis_image' src={CardImage}  alt=""/>
            
          </div>
          
        </div>
          <Compose />
        </ThoughtStyles>
    );
}