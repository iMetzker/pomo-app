import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media (max-width: 835px) {
    margin-top: 2rem;
    gap: 1rem;

    font-size: 1rem;
  }
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["gray-100"]};

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["purple-400"]};
  }

  @media (max-width: 835px) {
    font-size: 1rem;
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1; // O elemento vai ocupar o máximo de espaço possível

  &::-webkit-calendar-picker-indicator {
    display: none !important; // retira a flexinha do input
  }

  @media (max-width: 835px) {
    font-size: 1rem;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;
`;
