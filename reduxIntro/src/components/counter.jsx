import { useSelector, useDispatch } from "react-redux";
import { incrementAction } from "../store/actions/increment-actions";
import { requestAge } from "../store/thunks/requestAge-thunk";

const Counter = () => {

    // On accède au state du store via useSelector 
    // state.counter.count => counter est le nom du reducer
    // count est le nom de la propriété du state du reducer
    const count = useSelector(state => state.counter.count);
    const age = useSelector(state => state.age.age);

    // On accède à la fonction dispatch via useDispatch
    const dispatch = useDispatch();

    const handleIncrement = () => {
        // On dispatch l'action incrementAction
        dispatch(incrementAction(1))
    }

    const handleRequest = (e) => {
        dispatch(requestAge(e.target.value))
    }

    return (
        <>
            <button onClick={handleIncrement}>+1</button>
            <h2>{count}</h2>

            <input type="text" placeholder="Enter your firstname" onBlur={handleRequest} />
            <h2>{age}</h2>
        </>
    )
};

export default Counter;