import { Link } from 'react-router-dom';
import styled from 'styled-components';

type NavItemProps = {
  link: string;
  children: React.ReactNode;
};

const NavItem = ({ link, children }: NavItemProps) => {
  const isExternalLink = () => {
    if (link.indexOf('http') === -1) return false;
    return true;
  };

  if (isExternalLink()) {
    return (
      <Container>
        <a href={link} target="_blank" rel="noreferrer">
          {children}
        </a>
      </Container>
    );
  }

  return (
    <Container>
      <Link to={link}>{children}</Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  & a {
    color: dimgray;
    font-size: 15px;
    display: flex;
    align-items: center;
  }
`;

export default NavItem;
