import styled from 'styled-components';

type CodeProps = {
  children: string;
};

const Code = ({ children }: CodeProps) => {
  return (
    <Container>
      <Pre>
        <code>{children}</code>
      </Pre>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  background: rgb(40, 44, 51);
  color: whitesmoke;
  border-radius: 3px;
`;

const Pre = styled.pre`
  margin: 0;
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  font-size: 15px;
  line-height: 20px;
`;

export default Code;
