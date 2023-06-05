import PropTypes from 'prop-types';

const ListItems = (props) => {

    const { name, price, isPromo } = props; 

    return (
        <li>
            <p>{name} : <span style={isPromo ? {color: 'red'} : {color: 'black'}}>{price}</span> Caps</p>
        </li>
    )
}

ListItems.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    isPromo: PropTypes.bool
};

export default ListItems;