import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 6.3125rem;
  padding: 0 5.5rem;

  grid-area: header;

  background: ${({ theme }) => theme["blue-500"]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.white};
    font-weight: 600;
    line-height: 19px;

    span {
      font-size: 1.25rem;
      font-weight: 300;
    }
  }
`;

export const CartButton = styled.button`
  background: ${({ theme }) => theme.white};
  border: none;

  width: 5.625rem;
  height: 2.875rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  cursor: pointer;

  transition: all 100ms ease-in-out;

  span {
    font-size: 1.125rem;
    font-weight: bold;
  }

  &:hover {
    filter: brightness(0.95);
  }
`;

export const Cart = styled.div`
  width: 30.375rem;
  height: 100vh;

  background: ${({ theme }) => theme["blue-500"]};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

  z-index: 3;

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "main"
    "footer";

  > main {
    padding: 2.625rem 3.75rem;

    grid-area: main;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      h2 {
        font-size: 1.625rem;
        width: 11.25rem;
        color: ${({ theme }) => theme.white};
        font-weight: 700;
      }

      button {
        display: flex;
        color: ${({ theme }) => theme.white};

        background: none;
        border: none;
        cursor: pointer;
      }
    }

    > div {
      height: 24rem;
      overflow: auto;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        color: ${({ theme }) => theme.white};
        font-size: 1.75rem;
        font-weight: 700;
      }
    }
  }
`;

export const FinalizeOrderButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};

  border: none;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 15px;

  height: 6rem;

  cursor: pointer;
`;