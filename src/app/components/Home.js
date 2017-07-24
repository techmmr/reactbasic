import React from 'react';

export class Home extends React.Component {
  constructor(props){
    super();
    this.state = {
        age: props.age
    }
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  };
  render() {
    return (
      <div>
        <p> home {this.props.name}, {this.state.age} </p>
        <hr/>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">increase age</button>
        <hr/>
        <button className="btn btn-primary" onClick={this.props.greet}></button>
      </div>
    );
  }
}