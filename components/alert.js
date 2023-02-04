import React from 'react';

const Alert = ({ type = 'info', message }) => (
  <div className={`alert alert-${type}`} role="alert">
    {message}
  </div>
);

export default Alert;
