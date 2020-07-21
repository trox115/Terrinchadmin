import React from 'react';
import PropTypes from 'prop-types';

function Table2({ nome, email, telefone }) {
  return (
    <tr>
      <td>{nome}</td>
      <td>{email}</td>
      <td>{telefone}</td>
    </tr>
  );
}

export default Table2;
