import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid ${({ theme }) => theme["gray-300"]};
  border-radius: 4px;

  > button {
    display: flex;
    align-items: center;
    border: none;
    background: none;

    padding: 0.2rem 0.5rem;

    font-size: 1rem;

    cursor: pointer;
  }

  > p {
    font-size: 0.5rem;
    padding: 0.2rem 0.5rem;
    border-inline: 1px solid ${({ theme }) => theme["gray-300"]};
  }
`;
