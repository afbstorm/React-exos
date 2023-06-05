import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../../store/actions/task-actions";	
import "./list.css";

const List = () => {
  const list = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const disableLink = (e) => {
    e.preventDefault();
    };

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };
  return (
    <>
      {list.length !== 0 ? (
        <div className="list">
          <ul>
            {list &&
              list.map((item) => {
                return (
                  <div key={item.id} className="link__container">
                    <Link
                      className="link"
                      to={`details/${item.id}`}
                      onClick={item.completed ? disableLink : null}
                    >
                      <li
                        className={
                            item.completed
                            ? "li__completed"
                            : item.priority === "high"
                            ? "li__priority--high"
                            : "li__priority--normal"
                        }
                      >
                        {item.name}
                      </li>
                    </Link>
                    <button
                      className={
                        item.completed ? "btn__visible" : "btn__hidden"
                      }
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete completed task
                    </button>
                  </div>
                );
              })}
          </ul>
        </div>
      ) : (
        <p>No tasks yet</p>
      )}
    </>
  );
};

export default List;
