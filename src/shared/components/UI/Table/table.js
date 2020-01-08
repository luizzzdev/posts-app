import React from 'react';
import classes from './table.module.sass';

const Table = ({ data, columns } = { data: [], columns: [] }) => {
  const headerColumns = columns.map(column => (
    <th key={column.label}>{column.label}</th>
  ));
  const bodyData = data.map((val, index) => {
    return (
      <tr key={index}>
        {columns.map(column => (
          <td key={`${column.prop}${val[column.prop]}`}>
            {val[column.prop] || ''}
          </td>
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
