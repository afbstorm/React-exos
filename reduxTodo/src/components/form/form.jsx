import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../../store/actions/task-actions";
import { nanoid } from "nanoid";
import './form.css';


const Form = () => {

    const [task, setTask] = useState({id: null, name: "", description: "", priority: "" });
    const dispatch = useDispatch();

    const handleChange = (inputName, value) => {
        setTask({ ...task, [inputName]: value, id: nanoid() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(task));
    };

    return (
        <div className="form__container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__input__container">
                    <label htmlFor="taskName" className="form__label">Task name </label>
                    <input type="text" name="taskName" className="form__input" placeholder="Task name" onChange={(e) => handleChange('name', e.target.value)}/>
                </div>
                <div className="form__input__container">
                    <label htmlFor="taskDescription" className="form__label">Task description </label>
                    <textarea name="taskDescription" className="form__textarea" placeholder="Task description" onChange={(e) => handleChange('description', e.target.value)} />
                </div>
                <div className="form__input__container"> 
                <label htmlFor="taskPriority" className="form__label">Task priority </label>
                    <select name="taskPriority" className="form__select" onChange={(e) => handleChange('priority', e.target.value)} value="">
                        <option value="" disabled>Select a priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <input className="form__button" type="submit" value="Add task" />
            </form>
        </div>
    )
};

export default Form;