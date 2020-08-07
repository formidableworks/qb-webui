import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export const PageRouter = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/transfers">
        <div>transfers page</div>
      </Route>

      <Route path="/search">
        <div>search page</div>
      </Route>

      <Route path="/rss">
        <div>rss page</div>
      </Route>

      <Route path="/settings">
        <div>settings page</div>
      </Route>

      <Route exact path="/">
        <Redirect to="/transfers" />
      </Route>
    </Switch>
  );
};
