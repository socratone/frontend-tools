import styled from 'styled-components';
import BarListItem from '../../components/listItem/BarListItem';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import GradientIcon from '@material-ui/icons/Gradient';
import ExtensionIcon from '@material-ui/icons/Extension';

const Tools = () => {
  return (
    <Grid>
      <BarListItem
        title="Beautiful CSS box-shadow"
        description="box-shadow 예제"
        icon={<Brightness4Icon />}
        link="https://getcssscan.com/css-box-shadow-examples"
      />
      <BarListItem
        title="CSS Gradient Generator"
        description="그라디언트"
        icon={<GradientIcon />}
        link="https://www.colorzilla.com/gradient-editor/"
      />
      <BarListItem
        title="The Shapes of CSS"
        description="CSS 도형 예제"
        icon={<ExtensionIcon />}
        link="https://css-tricks.com/the-shapes-of-css/"
      />
    </Grid>
  );
};

const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
`

export default Tools;
