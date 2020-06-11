import styled, { css } from "styled-components"

const pkTag = css`
    color: white;
    text-shadow: 2px 2px #000000;
    font-size: 1.4rem;
    border-radius: 5px;
    padding: 3px 10px;
    align-self: center;
    letter-spacing: 1px;
`
const PokemonList = styled.ul`
    list-style: none;
    min-height: 100vh;
    z-index: 10;
    position: relative;
    margin-top: 100px;
    margin-bottom: 0px;
    background: rgb(75, 140, 134);
    background: linear-gradient(
        90deg,
        rgba(75, 140, 134, 1) 0%,
        rgba(75, 140, 134, 1) 5%,
        rgba(120, 185, 179, 1) 5%,
        rgba(120, 185, 179, 1) 7%,
        rgba(112, 75, 56, 1) 7%,
        rgba(112, 75, 56, 1) 8%,
        rgba(168, 121, 95, 1) 8%,
        rgba(168, 121, 95, 1) 92%,
        rgba(112, 75, 56, 1) 92%,
        rgba(112, 75, 56, 1) 93%,
        rgba(120, 185, 179, 1) 93%,
        rgba(120, 185, 179, 1) 95%,
        rgba(75, 140, 134, 1) 95%,
        rgba(75, 140, 134, 1) 100%
    );
    padding: 50px 40px;
    li {
        height: 230px;
        background: rgb(31, 88, 47);
        background: linear-gradient(
            180deg,
            rgba(31, 88, 47, 1) 0%,
            rgba(31, 88, 47, 1) 45%,
            rgba(46, 123, 67, 1) 55%,
            rgba(46, 123, 67, 1) 100%
        );
        box-shadow: 5px 5px 5px black;
        border: 0.5vw solid #89ca86;
        position: relative;
        width: calc(100vw - 108px);
        @media screen and (min-width: 1440px) {
            width: calc(45vw - 40px);
        }
        margin-bottom: 20px;
        outline: 3px solid #132a00;
        display: grid;
        grid-template-columns: 150px 1fr;
        div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            .pkNum {
                color: white;
                font-size: 3em;
                text-shadow: 2px 2px #000000;
            }
            .pkImg {
                padding-top: 5px;
            }
        }
        div:last-child {
            display: grid;
            grid-template: 12px 1fr 24px 1fr 12px / 3fr 1fr;
            align-items: center;
            justify-items: center;
            white-space: nowrap;
            .pkName {
                grid-column: 1 / 2;
                grid-row: 2 / 3;
                color: white;
                font-size: calc(1em + 2vw);
                text-shadow: 2px 2px #000000;
                justify-self: flex-start;
                display: flex;
                .pkType {
                    ${pkTag};
                    margin-left: 10px;
                }
            }
            .pkHP {
                grid-column: 1 / 2;
                grid-row: 3 / 4;
                height: 100%;
                background: rgb(44, 145, 191);
                background: linear-gradient(
                    90deg,
                    rgba(44, 145, 191, 1) 0%,
                    rgba(31, 234, 20, 1) 100%
                );
                border: 5px solid #29243b;
                border-radius: 100px;
                width: 100%;
                display: flex;
                span {
                    color: #bc6805;
                    background-color: #29243b;
                    justify-self: flex-start;
                    font-size: 28px;
                    padding-left: 5px;
                    font-weight: bold;
                    letter-spacing: 5px;
                }
            }
            .pkHealth {
                grid-column: 1 / 2;
                grid-row: 4 / 5;
                color: white;
                font-size: calc(1em + 2vw);
                text-shadow: 2px 2px #000000;
                justify-self: flex-end;
            }
            .pkWeaknesses {
                grid-column: 2 / 3;
                grid-row: 2 / 5;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                overflow: auto;
                .pkWeakTitle {
                    color: white;
                    font-size: 1.7rem;
                    text-shadow: 2px 2px #000000;
                }
                span {
                    ${pkTag};
                    font-size: 1.2rem;
                    justify-self: flex-start;
                    margin-bottom: 5px;
                }
            }
        }
    }
    li:hover {
        outline: 0.5vw solid #d90b20;
        cursor: pointer;
    }
    @media screen and (min-width: 1440px) {
        li:nth-child(even) {
            transform: translate(0px, -175px);
            position: absolute;
            right: 40px;
        }
    }
`
const SearchBar = styled.div`
    position: fixed;
    bottom: 5px;
    z-index: 30;
    display: flex;
    width: 98vw;
    @media screen and (min-width: 1440px) {
        width: 50vw;
        left: 25vw;
    }
    right: 0;
    input {
        flex-grow: 1;
        font-size: 3em;
        color: #333;
        background-color: white;
        border: 0.3vw solid #2b5fb2;
        border-radius: 10px;
        text-shadow: 2px 2px #ccc;
        padding: 0px 10px;
    }
    button {
        background: rgb(5, 40, 186);
        background: linear-gradient(
            0deg,
            rgba(5, 40, 186, 1) 0%,
            rgba(5, 40, 186, 1) 45%,
            rgba(34, 147, 203, 1) 55%,
            rgba(34, 147, 203, 1) 100%
        );
        font-size: 3em;
        color: white;
        text-shadow: 2px 2px #000000;
        margin-left: 10px;
        padding: 10px 35px;
        border: 0.3vw solid #29243b;
        border-radius: 10px;
        :hover {
            cursor: pointer;
        }
    }
`
const ModalInside = styled.div`
    background: rgb(5, 40, 186);
    background: linear-gradient(
        0deg,
        rgba(5, 40, 186, 1) 0%,
        rgba(5, 40, 186, 1) 45%,
        rgba(34, 147, 203, 1) 55%,
        rgba(34, 147, 203, 1) 100%
    );
    border: 0.3vw solid #29243b;
    border-radius: 10px;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: white;
    text-shadow: 2px 2px #000000;
    font-size: 2em;
    button {
        font-size: 1em;
        color: #333;
        background-color: white;
        border: 3px solid #2b5fb2;
        border-radius: 10px;
        text-shadow: 2px 2px #ccc;
        padding: 0px 10px;
    }
    ul {
        list-style: none;
        .modalTitle {
            font-size: 2em;
        }
        li {
            margin-top: 5px;
            label {
                span {
                    margin-left: 5px;
                }
            }
        }
    }
`
const Modal = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    width: 80vw;
    max-width: 800px;
`

export default {
    PokemonList,
    SearchBar,
    ModalInside,
    Modal,
}
