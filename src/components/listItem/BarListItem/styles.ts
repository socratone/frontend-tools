import styled from 'styled-components';

export const Container = styled.li`
  border: 1px solid gainsboro;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  svg {
    font-size: 18px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const Main = styled.main`
  padding: 0 5px 5px 5px;
  color: dimgrey;
`;