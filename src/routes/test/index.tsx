import { Link } from 'react-router-dom';

const Test = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/test/1">test 1</Link>
        </li>
        <li>
          <Link to="/test/2">test 2</Link>
        </li>
        <li>
          <Link to="/test/3">test 3</Link>
        </li>
        <li>
          <Link to="/test/4">test 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Test;
