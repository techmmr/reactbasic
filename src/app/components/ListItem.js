import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = (props) => {
  return (
    <div>
      Name : {props.item.name} |
      Cost : {props.item.cost}
      <button onClick={() => props.editItem(props.index)}><span className="glyphicon glyphicon-pencil"/></button>
      <button onClick={() => props.removeItem(props.index)}><span className="glyphicon glyphicon-trash"/></button>
    </div>
  );
};

ListItem.propTypes = {
  index: PropTypes.number,
  removeItem: PropTypes.func,
  editItem: PropTypes.func,
  item: PropTypes.shape({
    name: PropTypes.string,
    cost: PropTypes.number,
  }),
};