import { Box } from '@material-ui/core';
import { useRef } from 'react';
import styled from 'styled-components';

type CodeProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Code = ({ value, onChange }: CodeProps) => {
  const codeRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab' && codeRef.current) {
      event.preventDefault();
      const start = codeRef.current.selectionStart;
      const end = codeRef.current.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      codeRef.current.value =
        codeRef.current.value.substring(0, start) +
        '  ' +
        codeRef.current.value.substring(end);

      // put caret at right position again
      codeRef.current.selectionStart = codeRef.current.selectionEnd = start + 2;
    }
  };

  return (
    <Box display="flex">
      <TextArea
        ref={codeRef}
        rows={15}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
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
