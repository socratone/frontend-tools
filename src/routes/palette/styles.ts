import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2px;
  }
`

export const Colors = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, 30px);
`