import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';

type StarsProps = {
  count: number;
};

const Stars = ({ count }: StarsProps) => {
  const setStarIcons = () => {
    let stars: React.ReactChild[] = [];
    for (let i = 1; i <= count; i++) {
      stars.push(<StyledStarIcon key={i} />);
    }
    return stars;
  };

  return <Container>{setStarIcons()}</Container>;
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledStarIcon = styled(StarIcon)`
  font-size: 20px;
  color: gold;
`;

export default Stars;
