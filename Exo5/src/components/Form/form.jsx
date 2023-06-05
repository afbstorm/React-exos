import Inputs from "../Inputs/inputs";
import Select from "../Select/select";
import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import './form.css';
import Textarea from "../Textarea/textarea";

const Form = (props) => {
  const [values, setValues] = useState({
    id: nanoid(),
    task: '',
    desc: '',
    priority: '',
    completed: false
  });

  const { setTask } = props;

  const priorities = ["High", "Normal", "Low"];

  const handleChanges = (inputName, val) => {
    setValues((prevValues) => ({ ...prevValues, [inputName]: val }));
  };

  const handleAddTask = (e, values) => {
    e.preventDefault()

    setTask((prevValues) => ([...prevValues, values]));
    setValues({
      task: '',
      desc: '',
      priority: '',
      completed: false
    });
  }

  return (
    <>
      <form className="form">
        <Inputs
          type={"text"}
          name={"Task name"}
          setValues={(val) => handleChanges("task", val)}
          value={values.task}
          className={"input-text"}
        />

        <Textarea
          name={"Description"}
          setValues={(val) => handleChanges("desc", val)}
          value={values.desc}
          className={"input-textarea"}
        />

        <Select
          name={"Priority"}
          setValues={(val) => handleChanges("priority", val)}
          options={priorities}
          value={values.priority}
          className={"input-select"}
        />

        <button className="btn-submit" type="submit" onClick={(e) => handleAddTask(e, values)}>Add</button>
      </form>
    </>
  );
};

Form.propTypes = {
  setTask: PropTypes.func
}

export default Form;
