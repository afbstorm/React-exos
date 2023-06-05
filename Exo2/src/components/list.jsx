import PropTypes from 'prop-types';
import ListItems from './listItem';
import { nanoid } from 'nanoid';

const List = (props) => {

    const items = props.list.map((i) => <ListItems key={nanoid()} {...i} />)

    return (
        <ul>
        {items}
        </ul>
        )
    }

List.propTypes = {
    list: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
};

export default List;