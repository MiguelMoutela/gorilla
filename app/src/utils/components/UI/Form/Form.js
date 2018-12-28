import styled from "styled-components";

const Form = styled.form`
    width: ${props => props.width || "100%"}
    max-width: 420px;
    height: ${props => props.height || "80%"}
    grid-column: ${props => props.gridColumn || ""}
    grid-row: ${props => props.gridRow || ""}
    background-color: ${props => props.backgroundColor || "#ffffff"};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;

    > a {
        font-family: "Inter UI Medium";
        font-size: 0.8rem;
        text-decoration: none;
        color: #39404a;
    }
`;

export default Form;
