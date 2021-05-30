import { Link } from 'react-router-dom';
import Column from '../../components/box/Column';
import datas from '../testId/datas';

const Test = () => {
  return (
    <div>
      <Column gap={10} mt="10px">
        {datas.map(data => {
          return (
            <li key={data.id}>
              <Link to={`/test/${data.id}`}>{data.question}</Link>
            </li>
          )
        })}
      </Column>
    </div>
  );
};

export default Test;
