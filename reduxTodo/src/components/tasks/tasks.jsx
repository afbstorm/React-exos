import Form from "../form/form"
import List from "../list/list"
import './tasks.css';

const Tasks = () => {

    return (
        <div className="tasks">
            <Form />
            <h2>Tasks</h2>
            <List />
        </div>
    )
};

export default Tasks;
