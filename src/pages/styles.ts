import { styled } from "styled-components";

export const NotCreatedYetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  & img {
    width: 100%;
    height: auto;

    @media screen and (min-width: 580px) {
      width: auto;
    }
  }
`;
