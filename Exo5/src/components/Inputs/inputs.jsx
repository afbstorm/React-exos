import PropTypes from "prop-types";
import './inputs.css';

const Inputs = (props) => {
  const { type, value, name, setValues, disabled, className } = props;

  return (
    <div className={className}>
      <label htmlFor={name} /> {name}
      <input
        type={type}
        name={name}
        onChange={(e) => setValues(e.target.value)}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

Inputs.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  setValues: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Inputs;
