import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, inputName, id, value, testId, onChange }) {
  return (
    <input
      type={ type }
      name={ inputName }
      id={ id }
      value={ value }
      data-testid={ testId }
      onChange={ onChange }
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
