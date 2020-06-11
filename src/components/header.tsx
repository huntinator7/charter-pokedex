import styled from "styled-components"

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 33%,
        rgba(0, 0, 0, 1) 33%,
        rgba(0, 0, 0, 1) 67%,
        rgba(255, 0, 0, 1) 67%,
        rgba(255, 0, 0, 1) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 5px black;
    z-index: 20;
    height: 100px;
    #headerCircle {
        width: 200px;
        height: 200px;
        background-color: white;
        border: 30px solid black;
        border-radius: 200px;
        position: absolute;
        z-index: 4;
    }
    h1 {
        z-index: 5;
        color: black;
        font-size: 3em;
    }
`
