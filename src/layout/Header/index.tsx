import styled from 'styled-components';

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.header`
  height: 60px;
  border-bottom: 1px solid gainsboro;
`;

export default Header;
