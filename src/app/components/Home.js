import React from 'react';
import {Data} from './Data';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      color: '',
      status: true
    };
  };
  onNameChange(event) {
    this.setState({
      name: event.target.value
    });
  };

  onAgeChange(event) {
    this.setState({
      age: event.target.value
    });
  };

  onColorChange(event) {
    this.setState({
      color: event.target.value
    });
  };


  onSubmit() {
    this.setState({
      status : false
    });
  }

  onEdit() {
    this.setState({
      status : true
    });
  }

  render() {
    if (this.state.status)
      return (
        <form>
          <h2>Form</h2> <br/>
          Name : <input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)}/><br/>
          Age : <input type="number" value={this.state.age} onChange={this.onAgeChange.bind(this)}/><br/>
          Color : <input type="color" value={this.state.color} onChange={this.onColorChange.bind(this)}/><br/>
          <button onClick={this.onSubmit.bind(this)}>Submit</button>
        </form>
      );
    else
      return (
        <Data name={this.state.name} age={this.state.age} color={this.state.color} onEdit={this.onEdit.bind(this)} />
      );
  };
}