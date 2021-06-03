import CopiableColor from '../../components/button/CopiableColor';
import PaletteIcon from '@material-ui/icons/Palette';
import { redColors, blueColors, greyColors } from './colors';
import { Title, Colors } from './styles';

const Palette = () => {
  return (
    <div>
      <Title>
        <PaletteIcon style={{ fontSize: '19px' }} />
        <span>붉은색 계열</span>
      </Title>
      <Colors>
        {redColors.map((color, i) => (
          <CopiableColor key={i} color={color} width={30} />
        ))}
      </Colors>
      <Title>
        <PaletteIcon style={{ fontSize: '19px' }} />
        <span>푸른색 계열</span>
      </Title>
      <Colors>
        {blueColors.map((color, i) => (
          <CopiableColor key={i} color={color} width={30} />
        ))}
      </Colors>
      <Title>
        <PaletteIcon style={{ fontSize: '19px' }} />
        <span>회색 계열</span>
      </Title>
      <Colors>
        {greyColors.map((color, i) => (
          <CopiableColor key={i} color={color} width={30} />
        ))}
      </Colors>
    </div>
  );
};

export default Palette;
