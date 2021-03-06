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
  font-size: 16px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
`;

export const CodeWrap = styled.div``

export const ViewerWrap = styled.div`
  display: flex;
  flex-direction: column;

  & *:first-child {
    margin-bottom: 10px;
  }
`