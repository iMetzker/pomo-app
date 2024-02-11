import styled from "styled-components";

export const TutorialContainer = styled.div``;

export const OpenTutorialBtn = styled.button`
  background: none;
  border: none;
  position: absolute;
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
`;

export const PopupContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme["gray-800"]};
  border: 1px solid ${(props) => props.theme["purple-400"]};
  box-shadow: 13px 20px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2.5rem;
`;

export const PopupContent = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 8px;
  padding: 1.5rem;
  max-height: 400px;
  overflow-y: scroll;

  h2,
  h3 {
    font-family: "Roboto Mono", monospace;
  }

  p {
    margin: 1rem 0;
    font-size: 1rem;

    svg {
      color: ${(props) => props.theme["purple-400"]};
    }

    span {
      margin-right: 0.3rem;
    }
  }

  a {
    font-family: "Roboto Mono", monospace;
    color: ${(props) => props.theme["purple-400"]};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["purple-400"]};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme["gray-700"]};
    border-radius: 8px;
  }
`;

export const CloseButton = styled.span`
  color: ${(props) => props.theme["gray-100"]};
  float: right;
  font-size: 28px;
  font-weight: bold;

  position: absolute;
  right: 0.7rem;
  top: 0.7rem;

  &:hover,
  &:focus {
    color: ${(props) => props.theme["purple-400"]};
    text-decoration: none;
    cursor: pointer;
    transition: all 200ms;
  }
`;
