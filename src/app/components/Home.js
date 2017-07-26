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
      editId: '',
      showForm: false,
      items: [],
      idCount: 0,
    };
  };

  editItem(itemId) {
    this.setState({
      editId: itemId,
      showForm: true,
    });
  }

  removeItem(itemId) {
    let newList = this.state.items;
    let item = newList.find(listItem => listItem.id === itemId);
    let index = newList.indexOf(item);
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
    if (!(/^[a-zA-Z]*$/.test(formData.name) && /^\d*$/.test(formData.cost))){
      return alert('lul nice try');
    }
    let newList = this.state.items;
    if (this.state.editId !== '') {
      let item = newList.find(listItem => listItem.id === this.state.editId);
      let index = newList.indexOf(item);
      formData.id = item.id;
      newList.splice(index, 1, formData);
    }
    else {
      formData.id = this.state.idCount;
      newList.push(formData);
    }
    this.setState({
      items: newList,
      showForm: false,
      idCount: this.state.idCount+1,
    });
  }

  formRender() {
    if (this.state.showForm) {
      if (this.state.editId !== '') {
        let item = this.state.items.find(listItem => listItem.id === this.state.editId);
        return this.state.showForm ? <Form data={item} handleSubmit={this.handleSubmit}/> : '';
      }
      return this.state.showForm ? <Form handleSubmit={this.handleSubmit}/> : '';
    }
    return '';
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