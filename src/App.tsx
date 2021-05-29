import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Header from './layout/Header';
import Main from './layout/Main';
import Nav from './layout/Nav';
import Routes from './routes';

function App() {
  return (
    <StylesProvider injectFirst>
      <Router>
        <Header>
          <Nav />
        </Header>
        <Main>
          <Routes />
        </Main>
      </Router>
    </StylesProvider>
  );
}

export default App;
