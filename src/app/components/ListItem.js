import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = (props) => {
  return (
    <div>
      ID : {props.item.id} |
      Name : {props.item.name} |
      Cost : {props.item.cost}
      <button onClick={() => props.editItem(props.item.id)}><span className="glyphicon glyphicon-pencil"/></button>
      <button onClick={() => props.removeItem(props.item.id)}><span className="glyphicon glyphicon-trash"/></button>
    </div>
  );
};

ListItem.propTypes = {
  removeItem: PropTypes.func,
  editItem: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    cost: PropTypes.number,
  }),
};