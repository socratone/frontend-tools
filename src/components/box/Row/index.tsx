import { Box } from '@material-ui/core';
import styled from 'styled-components';

type RowProps = {
  gap?: number
}

const Row = styled(Box)<RowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-right: ${props => props.gap + 'px'};
  }

  & > *:last-child {
    margin-right: 0;
  }
`

export default Row;