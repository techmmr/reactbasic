import React from 'react';
import {ProductList} from './ProductList';

export class Home extends React.Component {
  constructor() {
    super();
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      items: [
        {name: 'item1', cost: 20, editItem: this.editItem, removeItem: this.removeItem},
        {name: 'item2', cost: 60, editItem: this.editItem, removeItem: this.removeItem},
        {name: 'item3', cost: 120, editItem: this.editItem, removeItem: this.removeItem}
      ]
    };
  };

  editItem(index){
    console.log('edit item called with index ', index);
  }

  removeItem(index){
    let newList = this.state.items;
    newList.splice(index, 1);
    this.setState({
      items: newList
    });
  }

  render() {
    return (
        <ProductList items={this.state.items}  />
    );
  };
}