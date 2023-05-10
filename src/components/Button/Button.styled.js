import styled from "styled-components";

export const ButtonElement = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 130px;
  height: 40px;

  background-color: #9381c5;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #7351d3;
  }
`;
