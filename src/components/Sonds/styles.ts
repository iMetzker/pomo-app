import styled from "styled-components";

export const SoundsContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;

  button {
    background: none;
    border: none;
    right: 2rem;
    bottom: 2rem;
    cursor: pointer;

    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme["purple-400"]};
    }

    svg {
      color: ${(props) => props.theme["gray-400"]};
    }

    &.active {
      svg {
        color: ${(props) => props.theme["purple-400"]};
      }
    }
  }

  @media (max-width: 835px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    bottom: -5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 745px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    bottom: -5rem;
    left: 0;
    
    transform: translateX(0%);
  }
`;
