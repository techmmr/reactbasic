import React from 'react';

export const ListItem = (props) => {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.data.name}</td>
      <td>{props.data.cost}</td>
    </tr>
  );
};