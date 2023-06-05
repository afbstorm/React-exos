import PropTypes from "prop-types";
import './textarea.css';

const Textarea = (props) => {
  const { value, name, setValues, className } = props;

  return (
    <div className={className}>
      <label htmlFor={name} /> {name}
      <textarea
        name={name}
        onChange={(e) => setValues(e.target.value)}
        value={value}
      />
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  setValues: PropTypes.func,
};

export default Textarea;
