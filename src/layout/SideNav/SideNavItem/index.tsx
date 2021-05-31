import { Link } from 'react-router-dom';
import styled from 'styled-components';

type SideNavItemProps = {
  link: string;
  children: React.ReactNode;
};

const SideNavItem = ({ link, children }: SideNavItemProps) => {
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
  margin-bottom: 8px;

  & a {
    color: dimgray;
    font-size: 15px;
    display: flex;
    align-items: center;
  }
`;

export default SideNavItem;
