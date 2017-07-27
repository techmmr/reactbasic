import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import {Form} from './components/Form';
import {Home} from './components/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/product-list' component={Home}/>
          <Route exact path='/add-item' component={Form}/>
          <Route exact path='/edit-item/:id' component={Form}/>
        </div>
      </BrowserRouter>
    );
  };
}

render(<App />, window.document.getElementById('app'));