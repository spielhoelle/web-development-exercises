import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type, 
    onChange,
    error
}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
            type={type}
            name={name} 
            // className="form-control form-control-lg"
            // className="is-invalid form-control form-control-lg" 
            className={classnames('form-control form-control-lg', {
                'is-invalid': error
            })}
            placeholder={placeholder} 
            value={value} 
            // onChange={this.onNameChange}
            onChange={onChange}
            />
        {error && <div className="invalid-feedback">{error}</div>}
    </div>      
  )
}

TextInputGroup.PropTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string // not required
};

TextInputGroup.defaultProps = {
    type: 'text'
};

export default TextInputGroup;