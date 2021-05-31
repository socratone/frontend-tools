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
      .red {
        color: #ff5722;
      }
      .green {
        color: #8bc34a;
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
        passCount++;
      } else {
        document.body.insertAdjacentHTML('beforeend', 
          '<div class="red">${test.message}</div>');
      }
      `
    );
  }, '');

  const testCode = `
    let passCount = 0;

    try {
      ${testItems}
    } catch (error) {
      const div = document.createElement('div');
      div.classList.add('red');
      div.textContent = error.message;
      document.body.append(div);
    }
    if (passCount >= ${tests.length}) {
      const div = document.createElement('div');
      div.classList.add('green');
      div.textContent = '모든 테스트를 통과했습니다.';
      document.body.append(div);
    }
  `;

  if (functionCode.length === 0) {
    return <Iframe title="code-tester" />;
  }

  return (
    <Iframe
      title="code-tester"
      srcDoc={preScriptCode + functionCode + testCode + postScriptCode}
    />
  );
};

const Iframe = styled.iframe`
  width: 100%;
  border: 1px solid gainsboro;
`;

export default CodeTester;
