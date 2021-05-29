import { Route, Switch } from 'react-router';
import ColorKeywords from './color-keywords';
import TestId from './testId';
import Test from './test';
import Root from './root';

const Routes = () => {
  return (
    <Switch>
      <Route path="/color-keywords" component={ColorKeywords} />
      <Route path="/test/:id" component={TestId} />
      <Route path="/test" component={Test} />
      <Route path="/" component={Root} />
    </Switch>
  );
};

export default Routes;
