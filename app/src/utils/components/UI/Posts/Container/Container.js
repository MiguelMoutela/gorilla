import styled from "styled-components";

const Container = styled.div`
    width: ${props => props.width || "100%"}
    max-width: 650px;
    height: ${props => props.height || "80%"}
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
`;

export default Container;
