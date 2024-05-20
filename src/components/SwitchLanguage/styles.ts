import styled from "styled-components";

export const SwitchContainer = styled.div`
  position: absolute;
  top: -3.2rem;
  right: 1rem;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const LanguageButton = styled.button`
  background-color: transparent;
  border: none;
  width: 3rem;
  height: 3rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LanguageOptions = styled.div`
  position: absolute;
  right: -1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;

  background-color: ${(props) => props.theme["gray-800"]};
  border: 1px solid ${(props) => props.theme["purple-400"]};
  padding: 1rem;
  border-radius: 8px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
        color: ${(props) => props.theme["gray-400"]};  
    }

    &:hover {
        span {
            color: ${(props) => props.theme["purple-400"]};  
            transition: ease-in-out 200ms;
        }
    }
  }

  @media (max-width: 835px) {
    right: -1rem;
  }
`;
