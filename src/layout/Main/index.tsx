import styled from 'styled-components';

type MainProps = {
  children: React.ReactNode
}
 
const Main = ({ children }: MainProps) => {
  return (  
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`
 
export default Main;