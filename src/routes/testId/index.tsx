import { useParams } from 'react-router';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PrimaryButton from '../../components/button/PrimaryButton';
import Row from '../../components/box/Row';
import React, { useEffect, useState } from 'react';
import Code from '../../components/textInput/Code';
import CodeTester from '../../components/tester/CodeTester';
import Column from '../../components/box/Column';
import { RotateIconButton } from './styles';
import datas from './datas';
import SubTitle from '../../components/typography/SubTitle';

const TestId = () => {
  const { id } = useParams<{ id: string }>();
  const [code, setCode] = useState('');
  const [testedCode, setTestedCode] = useState('');
  const [hintClicked, setHintClicked] = useState(false);
  const [data] = datas.filter((data) => String(data.id) === id);

  useEffect(() => {
    setCode(data.defaultCode);
  }, [data.defaultCode]);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const handleTestClick = () => {
    setTestedCode(code);
  };

  const handleResetClick = () => {
    setCode(data.defaultCode);
    setTestedCode('');
  };

  const handleHintClick = () => {
    if (hintClicked) setHintClicked(false)
    else setHintClicked(true)
  }

  return (
    <div>
      <Column gap={10} mt="10px">
        <p>{data.question}</p>
        <Code value={code} onChange={handleCodeChange} />
        <Row gap={10}>
          <PrimaryButton onClick={handleTestClick}>테스트 하기</PrimaryButton>
          <PrimaryButton onClick={handleResetClick}>다시 작성하기</PrimaryButton>
        </Row>
        <SubTitle size={18}>결과</SubTitle>
        <CodeTester code={testedCode} tests={data.tests} />
        <Row>
          <SubTitle size={18}>힌트</SubTitle>
          <RotateIconButton size="small" onClick={handleHintClick} style={{ transform: hintClicked ? 'rotate(180deg)': 'rotate(0deg)' }}>
            <ArrowDropDownIcon />
          </RotateIconButton>
        </Row>
        {hintClicked && <p>{data.hint}</p>}
      </Column>
    </div>
  );
};

export default TestId;
