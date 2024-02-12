import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  position: relative;

  p {
    font-size: 0.9rem;
    margin: 0 auto;
  }

  button.switch {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;

    position: absolute;
    top: -3.2rem;
    right: 1rem;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme["gray-400"]};
    }
  }
`;
