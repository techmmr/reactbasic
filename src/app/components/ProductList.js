import React from 'react';
import {ListItem} from './ListItem';

export class ProductList extends React.Component {
  render() {
    const listItems = this.props.items.map((item, index) =>
      <ListItem  key={index} index={index} data={item} paginate={this.props.paginate}/>
    );
    return (
      <tbody>
      {listItems}
      </tbody>
    );
  };
}