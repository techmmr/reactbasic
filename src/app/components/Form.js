import React from 'react';
import PropTypes from 'prop-types';

export class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: props.data ? props.data.name : '',
      cost: props.data ? props.data.cost : 0,
    };
  };

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.name === this.state.name && nextState.cost === this.state.cost)
      return false;
    this.state = {
      name: nextState.name,
      cost: nextState.cost,
    };
    return true;
  }

  onNameChange(event) {
    if(/^[a-zA-Z]*$/.test(event.target.value)) {
      this.setState({
        name: event.target.value,
      });
    }
    else{
      alert('nup, this wont work, only alphabets');
    }
  };

  onCostChange(event) {
    if(/^\d*$/.test(event.target.value)) {
      this.setState({
        cost: Number(event.target.value),
      });
    }
    else{
      alert('nup, this wont work, only numbers');
    }
  };

  render() {
    let formData = {
      name: this.state.name,
      cost: Number(this.state.cost),
      id: this.props.data ? this.props.data.id : 0,
    };
    return (
      <form>
        Form <br/>
        Name : <input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)}/><br/>
        Cost : <input type="text" value={this.state.cost} onChange={this.onCostChange.bind(this)}/><br/>
        <button onClick={() => this.props.handleSubmit(formData)}>Submit</button>
      </form>
    );
  };
}

Form.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    cost: PropTypes.number,
  }),
  removeItem: PropTypes.func,
  editItem: PropTypes.func,
  handleSubmit: PropTypes.func,
};