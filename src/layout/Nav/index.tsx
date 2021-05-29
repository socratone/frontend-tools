import { Box, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import PaletteIcon from '@material-ui/icons/Palette';
import MenuIcon from '@material-ui/icons/Menu';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import NavItem from './NavItem';

const Nav = () => {
  return (
    <Container>
      <LinkList>
        <NavItem link="/" icon={<HomeIcon />}>
          홈
        </NavItem>
        <NavItem
          link="https://thinkforthink.tistory.com/"
          icon={<BookIcon />}
          iconSize={17}
        >
          블로그
        </NavItem>
        <NavItem link="/test" icon={<FitnessCenterIcon />}>
          Test
        </NavItem>
        <NavItem link="/color-keywords" icon={<PaletteIcon />}>
          Color Keywords
        </NavItem>
      </LinkList>
      <Box>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1000px;
  height: 100%;
`;

const LinkList = styled.ul`
  display: flex;

  & > * {
    margin-right: 12px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

export default Nav;
