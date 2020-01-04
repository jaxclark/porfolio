import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    height: 100%;
    min-height: 76vh;
    width: 100%;
    font-size: 18px;
    color: rgb(35, 49, 43);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 30px 0px;
    text-align: center;

    > a {
        color: rgba(0, 0, 0, 0.7);
        text-decoration: none;
    }

    > a:hover {
        color: rgb(14, 19, 16);
        text-decoration: underline;
    }
`
const ImageDiv = styled.div`
    grid-column: 2/3;
    padding: 40px 0px 0px 0px;

     > img {
        height: 300px;
        width: auto;
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        background-color: rgb(255, 255, 255);
    }
`

const HomeInfo = styled.div`
    grid-column: 3/4;
    text-align: start;
    position: relative;
    top: 0;
    left: 50%;
    padding: 80px 0px 0px 0px

    > a {
        color: rgba(0, 0, 0, 0.7);
        text-decoration: none;
        display: block;
        margin-top: 14px;
    }

    > a:hover {
        color: rgb(14, 19, 16);
        text-decoration: underline;
    }

    > p {
        margin-top: 14px;
    }
`

export default function About() {
    return(
        <StyledDiv className='home'>
            <ImageDiv className='imgDiv'>
                <img src='https://cdn.discordapp.com/attachments/632280517013930044/646137622149726208/myface.jpg' alt='myprofile' />
            </ImageDiv>
            <HomeInfo className='homeInfo'>
                <a href="https://www.linkedin.com/in/jaxclark/">LinkedIn</a>
                <a href="https://github.com/jaxclark">GitHub</a>
                <p>Phone#: (801)661-9908</p>
                <p>Email: jamaecla@gmail.com</p>
            </HomeInfo>
        </StyledDiv>
    )
}