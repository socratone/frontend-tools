import { Route, Switch } from 'react-router';
import Palette from './palette';
import TestId from './testId';
import Test from './test';
import Root from './root';

const Routes = () => {
  return (
    <Switch>
      <Route path="/palette" component={Palette} />
      <Route path="/test/:id" component={TestId} />
      <Route path="/test" component={Test} />
      <Route path="/" component={Root} />
    </Switch>
  );
};

export default Routes;
