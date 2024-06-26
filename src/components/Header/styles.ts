import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 835px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 1rem;
    gap: 1rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme["gray-100"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["purple-400"]};
      }

      &.active {
        color: ${(props) => props.theme["purple-400"]};
      }
    }
  }

  img {
    object-fit: contain;
    width: 110px;
    height: 110px;
    transform: scaleX(-1);
  }
`;
