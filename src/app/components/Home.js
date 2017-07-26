import React from 'react';
import {ProductList} from './ProductList';
import {Form} from './Form';

export class Home extends React.Component {
  constructor() {
    super();
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.state = {
      showForm: false,
      items: [
        {name: 'item1', cost: 20, editItem: this.editItem, removeItem: this.removeItem},
        {name: 'item2', cost: 60, editItem: this.editItem, removeItem: this.removeItem},
        {name: 'item3', cost: 120, editItem: this.editItem, removeItem: this.removeItem}
      ]
    };
  };

  editItem(index, formData){
    formData.editItem=this.editItem;
    formData.removeItem=this.removeItem;
    let newList = this.state.items;
    newList.push(data);
    this.setState({
      items: newList,
      showForm : false
    });
  }

  removeItem(index){
    let newList = this.state.items;
    newList.splice(index, 1);
    this.setState({
      items: newList
    });
  }

  addItem(){
    this.setState({
      showForm: !this.state.showForm
    });
  }

  onAddItem(formData){
    formData.editItem=this.editItem;
    formData.removeItem=this.removeItem;
    let newList = this.state.items;
    newList.push(formData);
    this.setState({
      items: newList,
      showForm : false
    });
  }

  render() {
    return (
      <div>
        Add New Item : <button onClick={this.addItem}><span className="glyphicon glyphicon-plus"/></button>
        {this.state.showForm?<Form onSubmit={this.onAddItem} />:''}
        <ProductList items={this.state.items} />
      </div>
    );
  };
}