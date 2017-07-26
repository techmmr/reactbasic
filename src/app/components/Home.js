import React from 'react';
import {ProductList} from './ProductList';
import {Form} from './Form';

export class Home extends React.Component {
  constructor() {
    super();
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showForm = this.showForm.bind(this);
    this.state = {
      editIndex: -1,
      showForm: false,
      items: [
        {name: 'item1', cost: 20},
        {name: 'item2', cost: 50},
        {name: 'item3', cost: 70},
      ],
    };
  };

  removeItem(index) {
    let newList = this.state.items;
    newList.splice(index, 1);
    this.setState({
      items: newList,
    });
  }

  showForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  handleSubmit(formData) {
    formData.editItem = this.editItem;
    formData.removeItem = this.removeItem;
    let newList = this.state.items;
    if (this.state.editIndex >= 0) {
      newList.splice(this.state.editIndex, 1, formData);
    }
    else {
      newList.push(formData);
    }
    this.setState({
      items: newList,
      showForm: false,
    });
  }

  editItem(index) {
    this.setState({
      editIndex: index,
      showForm: true,
    });
  }

  formRender() {
    let formRender = '';
    if (this.state.showForm) {
      if (this.state.editIndex >= 0) {
        return formRender = this.state.showForm ?
          <Form data={this.state.items[this.state.editIndex]} handleSubmit={this.handleSubmit}/> : '';
      }
      return formRender = this.state.showForm ? <Form handleSubmit={this.handleSubmit}/> : '';
    }
  }

  render() {
    return (
      <div>
        Add New Item :
        <button onClick={this.showForm}><span className="glyphicon glyphicon-plus"/></button>
        {this.formRender()}
        <ProductList items={this.state.items} removeItem={this.removeItem} editItem={this.editItem} />
      </div>
    );
  };
}