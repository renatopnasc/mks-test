import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;

  background: ${({ theme }) => theme.white};

  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: relative;

  & + & {
    margin-top: 1.375rem;
  }

  > img {
    max-width: 100%;
    height: 3.5rem;
    object-fit: cover;

    @media (max-width: 425px) {
      height: 6.25rem;
    }
  }

  > h1 {
    color: ${({ theme }) => theme["gray-700"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 17px;

    max-width: 7.125rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    > p {
      color: ${({ theme }) => theme.black};
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 17px;
    }
  }

  > button {
    display: flex;

    background: none;
    border: none;

    position: absolute;
    top: 6px;
    right: 6px;

    cursor: pointer;

    transition: all 100ms ease-in-out;

    &:hover {
      color: red;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 0.875rem;

    > div {
      gap: 1.875rem;

      > p {
        background: ${({ theme }) => theme["gray-700"]};
        color: ${({ theme }) => theme.white};

        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 15px; /* 100% */

        border-radius: 5px;

        padding: 0.5rem 1rem;
      }
    }
  }
`;
