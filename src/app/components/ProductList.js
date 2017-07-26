import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from './ListItem';

export class ProductList extends React.Component {
  render() {
    const listItems = this.props.items.map((item, index) =>
      <li key={index}>
        <ListItem index={index} item={item} removeItem={this.props.removeItem} editItem={this.props.editItem} />
      </li>
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  };
}

ProductList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    cost: PropTypes.number,
  })),
  removeItem: PropTypes.func,
  editItem: PropTypes.func,
};
