import { useParams } from 'react-router';
import PrimaryButton from '../../components/button/PrimaryButton';
import Row from '../../components/box/Row';
import React, { useEffect, useState } from 'react';
import Code from '../../components/textInput/Code';
import CodeTester from '../../components/tester/CodeTester';

const defaultValue = `function sum(a, b) {

}`;

const TestId = () => {
  const { id } = useParams<{ id: string }>();
  const [code, setCode] = useState('');
  const [testedCode, setTestedCode] = useState('');

  useEffect(() => {
    setCode(defaultValue);
  }, []);

  const setHTMLCode = () => {
    return `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <script>
          ${testedCode}
          try {
            if (sum(1, 2) !== 3) {
              document.body.append('1 + 2는 3이어야 합니다.')
            } 
          } catch (error) {
            console.log('error:', error)
          }
        </script>
      </body>
      </html>
    `;
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const handleTest = () => {
    setTestedCode(code);
  };

  return (
    <div>
      <p>a와 b를 더한 값을 반환하는 sum 함수를 만드세요.</p>
      <Code value={code} onChange={handleCodeChange} />
      <Row gap={10}>
        <PrimaryButton onClick={handleTest}>테스트 해보기</PrimaryButton>
        <PrimaryButton>다시 작성하기</PrimaryButton>
        <PrimaryButton>제출하기</PrimaryButton>
      </Row>
      <p>결과</p>
      <CodeTester
        code={testedCode}
        tests={[
          { message: '1 + 2는 3이어야 합니다.', if: 'sum(1, 2) !== 3' },
          { message: '1 + 4는 5이어야 합니다.', if: 'sum(1, 4) !== 5' },
          {
            message: '숫자 하나만 넣었을 때 숫자 하나의 값을 반환해야 합니다.',
            if: 'sum(1) !== 1',
          },
        ]}
      />
    </div>
  );
};

export default TestId;
