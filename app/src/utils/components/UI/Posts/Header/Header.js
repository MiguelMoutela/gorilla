import styled from "styled-components";

const Header = styled.header`
  width: 50%;
  height: 100%;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  justify-self: center;
  grid-column: 1 / 2;

  > h1 {
    font-family: "Inter UI Medium";
    font-size: 1rem;
    text-decoration: none;
    color: #39404a;
  }

  > a {
    font-family: "Inter UI Medium";
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    color: #39404a;
  }
`;

export default Header;
