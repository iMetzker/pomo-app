import styled from "styled-components";

export const TutorialContainer = styled.div`
`

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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color:  ${(props) => props.theme["gray-100"]};
  border-radius: 8px;
  padding: 2.5rem;
  z-index: 1;
`;

export const PopupContent = styled.div`
  text-align: center;
`;

export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
