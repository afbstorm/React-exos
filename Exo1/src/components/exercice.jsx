import PropTypes from 'prop-types';

const Exercice = (props) => {

const { name, age } = props;

    return (
        <section>
            <p style={{fontSize: '2rem', fontWeight: 'bolder'}}>Bienvenue {name} sur l&rsquo;application React !</p>
            <p>Vous avez {age} ans!</p>
        </section>
    )
}

Exercice.defaultProps = {
    age: 18
}

Exercice.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number
}
export default Exercice;
