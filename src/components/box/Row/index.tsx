import styled from 'styled-components';

type RowProps = {
  gap?: number;
  mb?: number;
  mt?: number;
  pl?: number;
  pr?: number;
  justifyContent?: 'space-between' | 'space-around' | 'space-evenly';
};

const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.mb + 'px'};
  margin-top: ${(props) => props.mt + 'px'};
  justify-content: ${(props) => props.justifyContent};
  padding-left: ${(props) => props.pl + 'px'};
  padding-right: ${(props) => props.pr + 'px'};

  & > * {
    margin-right: ${(props) => props.gap + 'px'};
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

export default Row;
