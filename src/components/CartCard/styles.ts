import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;

  background: ${({ theme }) => theme.white};

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  & + & {
    margin-top: 1.375rem;
  }

  > img {
    width: 2.875rem;
    height: 3.5rem;
    object-fit: cover;
  }

  > h1 {
    color: ${({ theme }) => theme["gray-700"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 17px;

    width: 7.125rem;
  }

  > input {
    width: 50px;
  }

  > p {
    color: ${({ theme }) => theme.black};
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 17px;
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
`;
