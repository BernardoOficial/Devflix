import styled from "styled-components";

const Input = styled.input `
    color: var(--black);
    border: 1px solid var(--white);
    box-sizing: border-box;
    padding: 8px 5px;
    font-style: normal;
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    margin: 10px 5px;
  
  &:hover,
  &:focus {
    opacity: .8;
  }
`;

export default Input; 