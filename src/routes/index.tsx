import { Route, Switch } from 'react-router';
import Palette from './palette';
import Beginner from './beginner';
import Tools from './tools';
import CodingTest from './beginner/coding-test';
import CodingTestId from './beginner/coding-test/id';
import Root from './root';

const Routes = () => {
  return (
    <Switch>
      <Route path="/palette" component={Palette} />
      <Route path="/beginner/coding-test/:id" component={CodingTestId} />
      <Route path="/beginner/coding-test" component={CodingTest} />
      <Route path="/beginner" component={Beginner} />
      <Route path="/tools" component={Tools} />
      <Route path="/" component={Root} />
    </Switch>
  );
};

export default Routes;
