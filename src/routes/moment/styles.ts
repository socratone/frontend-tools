import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`