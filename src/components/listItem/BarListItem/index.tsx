import { Box } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Container, Header, Title, Main } from './styles';

type BarListItemProps = {
  title: string;
  description: string;
  icon?: React.ReactChild;
  link: string;
};

const BarListItem = ({ title, description, icon, link }: BarListItemProps) => {
  const history = useHistory();

  const handleClick = () => {
    if (link.indexOf('http') === -1) {
      history.push(link);
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <Container onClick={handleClick}>
      <Header>
        {icon && (
          <Box display="flex" alignItems="center" mr="2px">
            {icon}
          </Box>
        )}
        <Title>{title}</Title>
      </Header>
      <Main>{description}</Main>
    </Container>
  );
};

export default BarListItem;
