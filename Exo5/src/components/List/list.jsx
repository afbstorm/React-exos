import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import ListItems from "./listItems";
import './list.css';

const List = (props) => {
  const { list, setTask } = props;

  const handleCompleteTask = (e, id) => {
    e.preventDefault();
    const updatedTaskList = list.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTask(updatedTaskList);
  };

  const handleDeleteTask = (e, id) => {
    e.preventDefault();
    const updatedTaskList = list.filter((task) => {
        return task.id !== id;
        }
    );
    setTask(updatedTaskList);
  };

  return (
    <ul>
      {list.map((tl) => (
        <div key={nanoid()} className="line-layout">
          <ListItems
            id={tl.id}
            task={tl.task}
            desc={tl.desc}
            priority={tl.priority}
            completed={tl.completed}
          />
          <div className="btn-layout">
            <button onClick={(e) => handleCompleteTask(e, tl.id)} disabled={tl.completed ? true : false}>
                Complete
            </button>
            <button onClick={(e) => handleDeleteTask(e, tl.id)}>Delete</button>
          </div>
        </div>
      ))}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.array,
  setTask: PropTypes.func,
};

export default List;
