import { useState } from 'react';
import CopiableColor from '../../components/button/CopiableColor';
import PaletteIcon from '@material-ui/icons/Palette';
import { redColors, blueColors, greyColors } from './colors';
import { Title, Colors } from './styles';
import AlertSnackbar from '../../components/snackbar/AlertSnackbar';

let timer: any;

const Palette = () => {
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleCopy = (value: string) => {
    setSnackbar(true);
    setSnackbarMessage(value);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setSnackbar(false);
    }, 2000);
  };

  return (
    <div>
      <Title>
        <PaletteIcon/>
        <span>붉은색 계열</span>
      </Title>
      <Colors>
        {redColors.map((color, i) => (
          <CopiableColor key={i} color={color} width={30} onCopy={handleCopy} />
        ))}
      </Colors>
      <Title>
        <PaletteIcon/>
        <span>푸른색 계열</span>
      </Title>
      <Colors>
        {blueColors.map((color, i) => (
          <CopiableColor key={i} color={color} width={30} onCopy={handleCopy} />
        ))}
      </Colors>
      <Title>
        <PaletteIcon/>
        <span>회색 계열</span>
      </Title>
      <Colors>
        {greyColors.map((color, i) => (
          <CopiableColor key={i} color={color} width={30} onCopy={handleCopy} />
        ))}
      </Colors>
      <AlertSnackbar open={snackbar}>
        {snackbarMessage + '를 클립보드에 복사했습니다.'}
      </AlertSnackbar>
    </div>
  );
};

export default Palette;
