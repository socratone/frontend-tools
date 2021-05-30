import { Box } from '@material-ui/core';
import styled from 'styled-components';

type CodeProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Code = ({ value, onChange }: CodeProps) => {
  return (
    <Box display="flex">
      <TextArea rows={15} value={value} onChange={onChange} autoFocus />
    </Box>
  );
};

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 18px;
  font-family: 'Source Code Pro', monospace;
  flex-grow: 1;
  display: block;
  border: 1px solid gainsboro;
`;

export default Code;
