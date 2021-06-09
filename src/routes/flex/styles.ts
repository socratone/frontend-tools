import styled from 'styled-components';

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
`;

export const CodeWrap = styled.div`
  grid-row: span 2;

  @media (max-width: 800px) {
    grid-row: unset;
    order: 2;
  }
`

export const ViewerWrap = styled.div`

`