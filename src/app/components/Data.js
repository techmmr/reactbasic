import React from 'react';

export class Data extends React.Component {
  render() {
    return (
      <div>
        <h2>Data</h2> <br/>
        Name : {this.props.name} <br/>
        Age : {this.props.age} <br/>
        Color : {this.props.color} <br/>
        <button onClick={this.props.onEdit}>Edit</button>
      </div>
    );
  };
}