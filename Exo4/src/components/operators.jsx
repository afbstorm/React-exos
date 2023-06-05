import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const Operators = (props) => {

    const { name, setValues, operators, value } = props;
    const selectedOperator = operators.find((o) => o === value);

    return(
        <>
        <label htmlFor={name} /> {name}
        <select name={name} onChange={(e) => setValues(e.target.value)} value={selectedOperator} >
        <option key={nanoid()} value="">Select an operator</option>
                {operators.map(o => 
                    <option key={nanoid()} value={o}>{o}</option>)}
            </select>
        </>
    )
}

export default Operators;

Operators.propTypes = {
    name: PropTypes.string,
    setValues: PropTypes.func,
    operators: PropTypes.array,
    value: PropTypes.string
}