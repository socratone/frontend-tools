import styled from 'styled-components';

type CSSCodeViewerProps = {
  markup: string;
  css: string;
};

const CSSCodeViewer = ({ markup, css }: CSSCodeViewerProps) => {
  return (
    <Container>
      <Pre>
        <code>{css}</code>
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

export default CSSCodeViewer;
