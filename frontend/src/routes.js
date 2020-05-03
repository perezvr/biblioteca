import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import BookList from './pages/BookList';
import BookRegister from './pages/BookRegister';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/books/' exact component={BookList} />
        <Route path='/books/register' exact component={BookRegister} />
      </Switch>
    </BrowserRouter>
  );
}