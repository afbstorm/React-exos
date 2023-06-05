import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './select.css';

const Select = (props) => {

    const { name, setValues, options, value, className } = props;
    const selectedOption = options.find((o) => o === value);

    return(
        <div className={className}>
        <label htmlFor={name} /> {name}
        <select name={name} onChange={(e) => setValues(e.target.value)} value={selectedOption} >
        <option key={nanoid()} value="">Select a {name}</option>
                {options.map(p => 
                    <option key={nanoid()} value={p}>{p}</option>)}
            </select>
        </div>
    )
}

export default Select;

Select.propTypes = {
    name: PropTypes.string,
    setValues: PropTypes.func,
    options: PropTypes.array,
    value: PropTypes.string,
    className: PropTypes.string
}