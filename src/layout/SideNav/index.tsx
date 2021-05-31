import styled from 'styled-components';
import SideNavItem from './SideNavItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CloseIcon from '@material-ui/icons/Close';
import { useEffect, useState } from 'react';

const NAV_WIDTH = '280px';

type SideNavProps = {
  onClose: () => void;
};

const SideNav = ({ onClose }: SideNavProps) => {
  const [transform, setTransform] = useState(`translateX(${NAV_WIDTH})`)

  useEffect(() => {
    setTransform('translateX(0px)')
  }, [])

  return (
    <ClickAwayListener onClickAway={onClose}>
      <Container style={{ transform }}>
        <CloseIconWrap>
          <CloseIcon
            onClick={onClose}
            style={{ fontSize: '20px', color: 'dimgrey', cursor: 'pointer' }}
          />
        </CloseIconWrap>
        <SideNavItem link="/">홈</SideNavItem>
        <SideNavItem link="https://thinkforthink.tistory.com/">
          Blog
        </SideNavItem>
        <SideNavItem link="/test">Test</SideNavItem>
        <SideNavItem link="/color-keywords">Color Keywords</SideNavItem>
      </Container>
    </ClickAwayListener>
  );
};

const Container = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  border-left: 1px solid gainsboro;
  width: ${NAV_WIDTH};
  height: 100vh;
  padding: 20px;

  transition: transform 0.3s;
`;

const CloseIconWrap = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
`;

export default SideNav;
