import moment from 'moment';
import 'moment/locale/ko';
import Code from '../../components/tester/Code';
import Column from '../../components/box/Column';
import { Grid } from './styles';
import { useEffect } from 'react';
import { useState } from 'react';

const Moment = () => {
  const [time, setTime] = useState(moment().format('h:mm:ss'));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment().format('h:mm:ss'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Column gap={20} mt={10}>
      <div>현재 시간 {time}</div>
      <Grid>
        <MomentItem
          viewSource={moment().format('YYYY년 MMMM Do a h시 mm분 ss초')}
          code="moment().format('YYYY년 MMMM Do a h시 mm분 ss초')"
        />
        <MomentItem
          viewSource={moment().format('dddd')}
          code="moment().format('dddd')"
        />
        <MomentItem
          viewSource={moment().format('MMM Do YY')}
          code="moment().format('MMM Do YY')"
        />
        <MomentItem
          viewSource={moment().format('YYYY [escaped] YYYY')}
          code="moment().format('YYYY [escaped] YYYY')"
        />
        <MomentItem viewSource={moment().format()} code="moment().format()" />
      </Grid>
    </Column>
  );
};

type MomentItemProps = {
  viewSource: string;
  code: string;
};

const MomentItem = ({ viewSource, code }: MomentItemProps) => {
  return (
    <>
      <p>{viewSource}</p>
      <Code>{code}</Code>
    </>
  );
};

export default Moment;
