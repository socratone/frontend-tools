import { Link } from 'react-router-dom';
import datas from '../testId/datas';

const Test = () => {
  return (
    <div>
      <ul>
        {datas.map(data => {
          return (
            <li key={data.id}>
              <Link to={`/test/${data.id}`}>{data.question}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Test;
