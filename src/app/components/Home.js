import React from 'react';
import {ProductList} from './ProductList';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {name: 'item1', cost: 20},
        {name: 'item2', cost: 60},
        {name: 'item3', cost: 120}
      ]
    };
  };

  render() {
    return (
      <table>
        <thead>
        <tr>
          <th>index</th>
          <th>name</th>
          <th>cost</th>
        </tr>
        </thead>
        <ProductList items={this.state.items}/>
      </table>
    );
  };
}