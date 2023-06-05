import Form from "../Form/form";
import List from "../List/List";
import { useState } from "react";
import PropTypes from "prop-types";
import './Todo.css';

const Todo = (props) => {
  const [task, setTask] = useState([]);
  const { title, secondaryTitle } = props;

  return (
    <section className="container">
        <h2>{title} :</h2>
        
      <section className="form-container">
        <Form setTask={setTask} />
      </section>
        <h2>{secondaryTitle} :</h2>
        
      <section className="list-container">
        <List list={task} setTask={setTask}/>
      </section>
    </section>
  );
};
Todo.propTypes = {
  title: PropTypes.string,
  secondaryTitle: PropTypes.string,
};
export default Todo;
