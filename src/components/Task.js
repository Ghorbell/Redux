import React from "react";
import { useDispatch } from "react-redux";
import { toggle, removetask } from "../redux/action/action";
import EditTask from "./EditTask"
const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task">
      <h1 className={task.isDone ? "Done" : ""}>{task.description}</h1>
      <div className="contbtn">
        <button onClick={() => dispatch(toggle(task.id))}>
          {task.isDone ? "Done" : "Not Done"}
        </button>
        <button onClick={() => dispatch(removetask(task.id))}>remove</button>
        <EditTask task={task} />
      </div>
    </div>
  );
};

export default Task;
