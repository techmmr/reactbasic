import React from 'react';
import {Link} from 'react-router-dom';
import {ProductList} from './ProductList';
import {Form} from './Form';
import {Header} from './Header';

export class Home extends React.Component {
  constructor() {
    super();
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      items: [{id: 0, name: 'lul', cost: 10}],
      idCount: 0,
    };
  };

  removeItem(itemId) {
    let newList = this.state.items;
    let item = newList.find(listItem => listItem.id === itemId);
    let index = newList.indexOf(item);
    newList.splice(index, 1);
    this.setState({
      items: newList,
    });
  }

  handleSubmit(formData) {
    if (formData.cost <= 0) {
      return alert('lul nice try');
    }
    let newList = this.state.items;
    if (this.state.editId >= 0) {
      let item = newList.find(listItem => listItem.id === this.state.editId);
      let index = newList.indexOf(item);
      newList.splice(index, 1, formData);
    }
    else {
      formData.id = this.state.idCount;
      newList.push(formData);
    }
    this.setState({
      items: newList,
      idCount: this.state.idCount + 1,
    });
  }

  editItem(itemId) {
    return (
    <Link to={'/edit-item/' + itemId}>
      <span className="glyphicon glyphicon-pencil"/>
    </Link>
    );
  }

  // formRender() {
  //   if (this.state.showForm) {
  //     let item = this.state.items.find(listItem => listItem.id === this.state.editId);
  //     return <Form data={item} handleSubmit={this.handleSubmit}/>;
  //   }
  //   return '';
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Link to="/product-list">Product List</Link> :
            <ProductList items={this.state.items} removeItem={this.removeItem} editItem={this.editItem}/>
          </div>
        </div>
      </div>
    );
  };
}