import { Link } from 'react-router-dom';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Column from '../../components/box/Column';
import { Item } from './styles';
import datas from '../testId/datas';
import { useEffect, useState } from 'react';

const Test = () => {
  const [passeds, setPasseds] = useState<{[key: string]: boolean | undefined}>({})

  useEffect(() => {
    const passedsString = localStorage.getItem('passeds');
    if (!passedsString) {
      localStorage.setItem('passeds', '{}');
    } else {
      const passedsObject = JSON.parse(passedsString);
      setPasseds(passedsObject);
    }
  }, []);

  return (
    <div>
      <Column mt="10px">
        {datas.map((data) => {
          if (passeds[data.id]) {
            return (
              <Item key={data.id}>
                <CheckBoxIcon style={{ fontSize: '20px', color: 'green' }} />
                <Link to={`/test/${data.id}`}>{data.question}</Link>
              </Item>
            );
          } else {
            return (
              <Item key={data.id}>
                <CheckBoxOutlineBlankIcon
                  style={{ fontSize: '20px', color: 'dimgrey' }}
                />
                <Link to={`/test/${data.id}`}>{data.question}</Link>
              </Item>
            );
          }
        })}
      </Column>
    </div>
  );
};

export default Test;
