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
  onNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  };

  onCostChange(event) {
    this.setState({
      cost: event.target.value,
    });
  };

  render() {
    let formData = {name: this.state.name, cost: Number(this.state.cost)};
    return (
      <form>
        Form <br/>
        Name : <input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)}/><br/>
        Cost : <input type="number" value={this.state.cost} onChange={this.onCostChange.bind(this)}/><br/>
        <button onClick={() => this.props.handleSubmit(formData)}>Submit</button>
      </form>
    );
  };
}

Form.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    cost: PropTypes.number,
  }),
  removeItem: PropTypes.func,
  editItem: PropTypes.func,
  handleSubmit: PropTypes.func,
};