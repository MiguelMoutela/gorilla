import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  height: 110px;
  background-color: rgba(246, 246, 246, 0.3);
  border: 1px solid #d8dde6;
  border-radius: 5px;
  line-height: 1.5;
  text-indent: 20px;
  font-size: 14px;
  font-family: "Inter UI Medium";
  transition: border-color 0.2s ease, background-color 0.2s ease;
  cursor: pointer;

  ::-webkit-input-placeholder {
    opacity: 0.4;
    font-size: inherit;
    color: inherit;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  &:hover {
    border: 1px solid #a3afc4;
  }

  &:focus {
    border: 1px solid #d8dde6;
    background-color: rgba(246, 246, 246, 0.2);
  }

  :focus::-webkit-input-placeholder {
    opacity: 0;
    transform: translateX(10px);
  }
`;

export default TextArea;
