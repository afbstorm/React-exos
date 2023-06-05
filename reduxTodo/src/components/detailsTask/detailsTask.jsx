import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteTask, toggleCompleted } from "../../store/actions/task-actions";
import './detailsTask.css';

const DetailTask = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const task = useSelector((state) => state.task.tasks);
    const selectedTask = task.find((item) => item.id === id);

    const handleCompletion = () => {
        dispatch(toggleCompleted(id));
        navigate('/');
    };

    const handleDelete = () => {
        dispatch(deleteTask(id));
        navigate('/');
    };

    const handleNavigation = () => {
        navigate('/');
    };

    return (
        <>
            <div className="detailsTask__container">
                <div className="detailsTask">
                    <h2 className="detailsTask__title">
                        {selectedTask.name}
                    </h2>
                    <p className="detailsTask__description">
                        {selectedTask.description}
                    </p>
                </div>
                <p className={selectedTask.priority === "high" ? "detailsTask__priority--high" : "detailsTask__priority--normal"}>
                        {selectedTask.priority}
                </p>
            </div>
            <div className="detailsTask__button__container">
                <button className="detailsTask__button" onClick={handleCompletion}>Completed</button>
                <button className="detailsTask__button" onClick={handleDelete}>Delete</button>
                <button className="detailsTask__button" onClick={handleNavigation}>Back</button>
            </div>
        </>
    )
};


export default DetailTask;