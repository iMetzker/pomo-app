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

  p.author {
    @media (max-width: 835px) {
      padding-top: 2rem;
    }
  }

  @media (max-width: 835px) {
    height: auto;
  }
`;
