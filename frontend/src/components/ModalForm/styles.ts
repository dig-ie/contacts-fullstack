import styled from "styled-components";
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparente para o fundo */
  z-index: 1000; /* Colocar o modal no topo */
`;
export const FormContainer = styled.div`
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
  border-radius: 16px;
  width: 450px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  font-family: "Open Sans", sans-serif;
  background-color: white;
  z-index: 1001;
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
