import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Book from './pages/Book';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main}></Route>
        <Route path='/book/:id' exact component={Book}></Route>
      </Switch>
    </BrowserRouter>
  );
}