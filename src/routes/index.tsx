import { Route, Switch } from 'react-router';
import Palette from './palette';
import Beginner from './beginner';
import Tools from './tools';
import CodingTest from './beginner/coding-test';
import CodingTestId from './beginner/coding-test/id';
import Root from './root';
import Flex from './flex';
import Grid from './grid';
import Moment from './moment';

const Routes = () => {
  return (
    <Switch>
      <Route path="/tools" component={Tools} />
      <Route path="/flex" component={Flex} />
      <Route path="/grid" component={Grid} />
      <Route path="/palette" component={Palette} />
      <Route path="/moment" component={Moment} />
      <Route path="/beginner/coding-test/:id" component={CodingTestId} />
      <Route path="/beginner/coding-test" component={CodingTest} />
      <Route path="/beginner" component={Beginner} />
      <Route path="/" component={Root} />
    </Switch>
  );
};

export default Routes;
