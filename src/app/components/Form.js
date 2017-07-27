import React from 'react';
import PropTypes from 'prop-types';

export class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
      nameValidationError: false,
      costValidationError: false,
      name: props.data ? props.data.name : '',
      cost: props.data ? props.data.cost : 0,
    };
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState === this.state)
      return false;
    this.state = {
      name: nextState.name,
      cost: nextState.cost,
    };
    return true;
  }

  onNameChange(event) {
    if (/^[a-zA-Z]*$/.test(event.target.value)) {
      this.setState({
        name: event.target.value,
      });
    }
    else {
      this.setState({
        nameValidationError: true,
      });
      setTimeout(() => {
        this.setState({
          nameValidationError: false,
        });
      }, 3000);
    }
  };

  onCostChange(event) {
    if (/^\d*$/.test(event.target.value)) {
      this.setState({
        cost: Number(event.target.value),
      });
    }
    else {
      this.setState({
        costValidationError: true,
      });
      setTimeout(() => {
        this.setState({
          costValidationError: false,
        });
      }, 3000);
    }
  };

  render() {
    let formData = {
      name: this.state.name,
      cost: Number(this.state.cost),
      id: this.props.match.params.id ? this.props.match.params.id: 0,
    };
    return (
      <form>
        Form <br/>
        Name : <input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
        {this.state.nameValidationError ? <span style={{color: 'red'}}>Name should be alphabets only.</span> : ''}<br />
        Cost : <input type="text" value={this.state.cost} onChange={this.onCostChange.bind(this)}/>
        {this.state.costValidationError ? <span style={{color: 'red'}}>Cost should be Number only.</span> : ''}<br />
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