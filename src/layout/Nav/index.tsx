import { Box } from '@material-ui/core';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import NavItem from './NavItem';
import { useState } from 'react';
import SideNav from '../SideNav';

const Nav = () => {
  const [openBars, setOpenBars] = useState(false);

  const handleBarsClick = () => {
    setOpenBars(true);
  };

  const handleBarsClose = () => {
    setOpenBars(false);
  }

  return (
    <>
      <Container>
        <LinkList>
          <NavItem link="/">
            <HomeIcon style={{ fontSize: '18px' }} />
          </NavItem>
          <NavItem link="/tools">Tools</NavItem>
          <NavItem link="/flex">Flex</NavItem>
          <NavItem link="/grid">Grid</NavItem>
          <NavItem link="/beginner/coding-test">Coding Test</NavItem>
          <NavItem link="/palette">Palette</NavItem>
          <NavItem link="/moment">Moment</NavItem>
          <NavItem link="https://thinkforthink.tistory.com/">Blog</NavItem>
        </LinkList>
        <Box
          display="flex"
          onClick={handleBarsClick}
          style={{ cursor: 'pointer' }}
        >
          <MenuIcon style={{ fontSize: '20px', color: 'dimgrey' }} />
        </Box>
      </Container>
      {openBars && <SideNav onClose={handleBarsClose} />}
    </>
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
  height: 100%;

  & > * {
    margin-right: 20px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

export default Nav;
