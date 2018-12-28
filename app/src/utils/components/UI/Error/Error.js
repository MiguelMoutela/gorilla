import styled from "styled-components";

const Error = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(254, 0, 0, 0.2);
  border: 1px solid #fe0000;
  border-radius: 5px;

  > h2 {
    font-family: "Inter UI Medium";
    font-size: 0.8rem;
    color: #fe0000;
  }
`;

export default Error;
