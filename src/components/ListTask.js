import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const List = useSelector((state) => state.todoReducer.List);
  const status=useSelector((state=>state.todoReducer.status));
  return (
    <div>
      {status === "All"
        ? List.map((el) => <Task key={el.id} task={el} />)
        : status === "Done"
        ? List.filter((el) => el.isDone === true).map((el) => (
            <Task key={el.id} task={el} />
          ))
        : List.filter((el) => el.isDone === false).map((el) => (
            <Task key={el.id} task={el} />
          ))}
    </div>
  );
};

export default ListTask;
