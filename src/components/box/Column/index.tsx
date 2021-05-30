import { Box } from '@material-ui/core';
import styled from 'styled-components';

type ColumnProps = {
  gap?: number
}

const Column = styled(Box)<ColumnProps>`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: ${props => props.gap + 'px'};
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`

export default Column;