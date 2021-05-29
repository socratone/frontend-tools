import styled from 'styled-components';

type CodeTesterProps = {
  code: string;
  tests: {
    message: string;
    if: string;
  }[];
};

const preScriptCode = `<!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      div {
        color: red;
      }
    </style>
  </head>
  <body>
    <script>
`;

const postScriptCode = `
    </script>
  </body>
  </html>
`;

const CodeTester = ({ code: functionCode, tests }: CodeTesterProps) => {
  const testItems = tests.reduce((acc, test) => {
    return (
      acc +
      `if (${test.if}) {
        document.body.insertAdjacentHTML('beforeend', 
          '<div>${test.message}</div>');
      }`
    );
  }, '');

  const testCode = `
    try {
      ${testItems}
    } catch (error) {
      const div = document.createElement('div');
      div.textContent = error.message;
      document.body.append(div);
    }
  `;

  if (functionCode.length === 0) {
    return null
  }

  return (
    <StyledIframe
      title="code-tester"
      srcDoc={preScriptCode + functionCode + testCode + postScriptCode}
    />
  );
};

const StyledIframe = styled.iframe`
  width: 100%;
  border: 1px solid gainsboro;
`

export default CodeTester;
