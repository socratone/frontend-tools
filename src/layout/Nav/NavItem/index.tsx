import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type NavItemProps = {
  link: string;
  icon: React.ReactElement;
  iconSize?: number;
  children: string;
};

const NavItem = ({ link, icon, iconSize = 20, children }: NavItemProps) => {
  const isExternalLink = () => {
    if (link.indexOf('http') === -1) return false;
    return true;
  };

  if (isExternalLink()) {
    return (
      <Container>
        <IconWrap>
          <icon.type style={{ fontSize: iconSize + 'px' }} />
        </IconWrap>
        <a href={link} target="_blank" rel="noreferrer">
          {children}
        </a>
      </Container>
    );
  }

  return (
    <Container>
      <IconWrap>
        <icon.type style={{ fontSize: iconSize + 'px' }} />
      </IconWrap>
      <Link to={link}>{children}</Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 3px;
  }

  & a {
    color: black;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
`

export default NavItem;
