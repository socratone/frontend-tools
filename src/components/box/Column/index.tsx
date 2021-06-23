import styled from 'styled-components';

type ColumnProps = {
  gap?: number
  mb?: number
  mt?: number
  pl?: number
  pr?: number
}

const Column = styled.div<ColumnProps>`
  margin-bottom: ${(props) => props.mb + 'px'};
  margin-top: ${(props) => props.mt + 'px'};
  padding-left: ${(props) => props.pl + 'px'};
  padding-right: ${(props) => props.pr + 'px'};

  & > * {
    margin-bottom: ${(props) => props.gap + 'px'};
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`

export default Column;