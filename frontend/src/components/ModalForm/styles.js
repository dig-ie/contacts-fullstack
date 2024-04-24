import styled from "styled-components";

export const FormContainer = styled.div`
  border: none;
  border-radius: 16px;
  width: 300px;
  height: 180px;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5); /* sombra */

  display: flex;
  flex-direction: column;
  gap: 16px;

  align-items: center;
  justify-content: center;

  padding: 0.75rem;

  font-family: "Open Sans", sans-serif;

  background-color: white;

  z-index: 800;
`;

export const StyledLabel = styled.label`
  color: black;
  font-style: bold;
  font-size: 16px;

  align-self: flex-start;
`;

export const InputContainer = styled.div``;

export const ButtonContainer = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;
