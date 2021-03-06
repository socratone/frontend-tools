import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';

type CopiableColorProps = {
  color: string;
  width: number;
  onCopy?: (value: string) => void;
};

const CopiableColor = ({ color, width, onCopy }: CopiableColorProps) => {
  const copyClipboard = (value: string) => {
    const textarea = document.createElement('textarea');
    textarea.textContent = value;
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    if (onCopy) onCopy(value);
  };

  const handleClick = () => {
    copyClipboard(color);
  };

  return (
    <Tooltip title={color} arrow>
      <Container
        style={{ background: color, width: width + 'px', height: width + 'px' }}
        onClick={handleClick}
      />
    </Tooltip>
  );
};

const Container = styled.div`
  cursor: pointer;
  border-radius: 3px;

  &:active {
    transform: scale(0.95);
  }
`;

export default CopiableColor;
