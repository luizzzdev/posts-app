import React from 'react';
import classes from './table.module.sass';

const Table = ({ data, columns } = { data: [], columns: [] }) => {
  const headerColumns = columns.map(column => <th>{column.label}</th>);
  const bodyData = data.map(val => {
    return (
      <tr>
        {columns.map(column => (
          <td>{val[column.prop] || ''}</td>
        ))}
      </tr>
    );
  });

  return (
    <table className={classes.Table}>
      <thead>
        <tr>{headerColumns}</tr>
      </thead>
      <tbody>{bodyData}</tbody>
    </table>
  );
};

export default Table;
