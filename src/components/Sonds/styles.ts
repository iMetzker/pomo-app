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

    @media (max-width: 745px) {
      width: 1.5rem;
    height: 1.5rem;
  }
  }

  @media (max-width: 835px) {
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    bottom: -6rem;
    left: 50%;
    transform: translateX(-50%);

    width: 100%;
    padding-bottom: 2rem;
  }
`;
