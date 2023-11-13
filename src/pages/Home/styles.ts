import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    overflow: auto;
    padding-block: 7.25rem;

    padding: 3.875rem;
  }

  > footer {
    background: ${({ theme }) => theme["gray-200"]};
    display: flex;
    align-items: center;
    justify-content: center;

    grid-area: footer;

    padding: 0.5rem;

    color: ${({ theme }) => theme.black};
    font-size: 0.75rem;
    font-weight: 400;
  }
`;

export const Content = styled.div`
  grid-area: content;

  max-width: 58.625rem;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.875rem 1.375rem;

  > section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 0 auto;

    max-width: 58.625rem;

    @media (max-width: 425px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
