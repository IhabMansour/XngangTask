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

export const BooksPageContainer = styled.div<{ noData: boolean }>`
  width: 100%;
  display: ${(props) => (props.noData ? "flex" : "")};
  justify-content: ${(props) => (props.noData ? "center" : "")};
  align-items: ${(props) => (props.noData ? "center" : "")};
`;
