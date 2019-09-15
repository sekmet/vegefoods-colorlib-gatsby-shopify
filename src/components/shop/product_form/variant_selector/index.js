import React from 'react'
import PropTypes from 'prop-types'

const VariantSelector = props => {
  const { option } = props
  return (
    <>
      <label htmlFor={option.name}>{option.name} </label>
        <div className="form-group">
        <div className="select-wrap">
            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
          <select
            name={option.name}
            key={option.id}
            onChange={props.onChange}
            className="form-control"
          >
            {option.values.map(value => {
              return (
                <option
                  value={value}
                  key={`${option.name}-${value}`}
                >{`${value}`}</option>
              )
            })}
          </select>
        </div>
        </div>
    </>
  )
}

VariantSelector.propTypes = {
  onChange: PropTypes.func,
  option: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default VariantSelector
