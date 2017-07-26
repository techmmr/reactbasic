import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from './ListItem';

export class ProductList extends React.Component {
  render() {
    const listItems = this.props.items.map((item, index) =>
      <li key={index}>
        <ListItem index={index} item={item} />
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
  items: PropTypes.arrayOf(PropTypes.object)
};
