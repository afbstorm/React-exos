import PropTypes from 'prop-types';

const Inputs = (props) => {

    const { type, value, name, setValues, disabled } = props;

    return(
        <>
        <label htmlFor={name} /> {name}
        <input type={type} name={name} onChange={(e) => setValues(e.target.value)} value={value} disabled={disabled}/>
        </>
    )
}

Inputs.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    setValues: PropTypes.func,
    disabled: PropTypes.bool
}

export default Inputs;
