import React from 'react';
import {ProductList} from './ProductList';
import {Form} from './Form';

export class Home extends React.Component {
  constructor() {
    super();
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.onEditItem = this.onEditItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.state = {
      editIndex: -1,
      showForm: false,
      items: [
        {name: 'item1', cost: 20, editItem: this.editItem, removeItem: this.removeItem},
        {name: 'item2', cost: 60, editItem: this.editItem, removeItem: this.removeItem},
        {name: 'item3', cost: 120, editItem: this.editItem, removeItem: this.removeItem}
      ]
    };
  };

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
    //add validations here
    formData.editItem=this.editItem;
    formData.removeItem=this.removeItem;
    let newList = this.state.items;
    newList.push(formData);
    this.setState({
      items: newList,
      showForm : false
    });
  }

  onEditItem(formData){
    //add valideations here
    formData.editItem=this.editItem;
    formData.removeItem=this.removeItem;
    let newList = this.state.items;
    newList.splice(this.state.editIndex, 1, formData);
    this.setState({
      items: newList,
      showForm : false
    });
  }

  editItem(index){
    this.setState({
      editIndex: index,
      showForm: true
    });
  }

  render() {
    let formRender='';
    if(this.state.showForm)
      if(this.state.editIndex>=0)
        formRender=this.state.showForm?<Form data={this.state.items[this.state.editIndex]} onSubmit={this.onEditItem} />:'';

      else
        formRender=this.state.showForm?<Form onSubmit={this.onAddItem} />:'';
    return (
      <div>
        Add New Item : <button onClick={this.addItem}><span className="glyphicon glyphicon-plus"/></button>
        {formRender}
        <ProductList items={this.state.items} />
      </div>
    );
  };
}