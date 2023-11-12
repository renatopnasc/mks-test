import styled from "styled-components";

export const Container = styled.div`
  width: 13.625rem;
  overflow: hidden;

  position: relative;

  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

  background: ${({ theme }) => theme.white};

  @media (max-width: 425px) {
    width: 100%;
  }

  > img {
    width: 100%;
    height: 9.5rem;
    object-fit: contain;
  }

  > section {
    width: 100%;
    padding: 0.875rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .productInfo {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      h1 {
        color: ${({ theme }) => theme["gray-700"]};
        font-size: 1rem;
        font-weight: 400;
        line-height: 19px;
      }

      p {
        background: ${({ theme }) => theme["gray-500"]};
        color: ${({ theme }) => theme.white};
        padding: 0.25rem 0.375rem;
        border-radius: 5px;
        font-weight: 700;
      }
    }

    .productDescription {
      color: ${({ theme }) => theme["gray-700"]};
      font-size: 0.625rem;
      font-weight: 300;
      line-height: 12px;

      padding-bottom: 2rem;
    }
  }

  > footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;

  background: ${({ theme }) => theme["blue-500"]};
  border: none;
  text-transform: uppercase;

  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 18px;

  cursor: pointer;

  transition: all 100ms ease-in-out;

  &:hover {
    filter: brightness(0.95);
  }
`;
