import React from 'react';

export class Form extends React.Component {
  constructor(props){
    super();
    this.state = {
      name: props.name||'',
      cost: props.cost||0
    };
  };
  onNameChange(event) {
    this.setState({
      name: event.target.value
    });
  };

  onCostChange(event) {
    this.setState({
      cost: event.target.value
    });
  };

  render() {
    let formData = {name: this.state.name, cost: this.state.cost};
    return (
      <form>
        Form <br/>
        Name : <input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)}/><br/>
        Cost : <input type="number" value={this.state.cost} onChange={this.onCostChange.bind(this)}/><br/>
        <button onClick={() => this.props.onSubmit(formData)}>Submit</button>
      </form>
    );
  };
}