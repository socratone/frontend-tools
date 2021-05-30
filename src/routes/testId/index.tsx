import { useParams } from 'react-router';
import PrimaryButton from '../../components/button/PrimaryButton';
import Row from '../../components/box/Row';
import React, { useEffect, useState } from 'react';
import Code from '../../components/textInput/Code';
import CodeTester from '../../components/tester/CodeTester';
import Column from '../../components/box/Column';
import datas from './datas';

const TestId = () => {
  const { id } = useParams<{ id: string }>();
  const [code, setCode] = useState('');
  const [testedCode, setTestedCode] = useState('');
  const [data] = datas.filter(data => String(data.id) === id)

  useEffect(() => {
    setCode(data.defaultCode);
  }, [data.defaultCode]);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const handleTest = () => {
    setTestedCode(code);
  };

  const handleReset = () => {
    setCode(data.defaultCode);
    setTestedCode('');
  }

  return (
    <div>
      <Column gap={10} mt="10px">
        <p>{data.question}</p>
        <Code value={code} onChange={handleCodeChange} />
        <Row gap={10}>
          <PrimaryButton onClick={handleTest}>테스트 하기</PrimaryButton>
          <PrimaryButton onClick={handleReset}>다시 작성하기</PrimaryButton>
        </Row>
        <p>결과</p>
        <CodeTester
          code={testedCode}
          tests={data.tests}
        />
      </Column>
    </div>
  );
};

export default TestId;
