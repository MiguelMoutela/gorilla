import styled from "styled-components";

const StyledPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  padding-left: 30px;
  width: 80%;
  height: 50px;
  border: 1px solid #d8dde6;
  border-radius: 5px;
  font-family: "Inter UI Medium";
  transition: border-color 0.2s ease, background-color 0.2s ease;
  cursor: pointer;

  > h1 {
    font-family: "Inter UI Medium";
    font-size: 1rem;
    text-decoration: none;
    color: rgba(57, 64, 74, 0.7);
  }

  &:hover {
    border: 1px solid #a3afc4;

    > h1 {
      color: #39404a;
    }
  }
`;

export default StyledPost;
