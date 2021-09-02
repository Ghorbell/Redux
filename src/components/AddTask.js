import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask } from "../redux/action/action";

const AddTask = () => {
  const dispatch = useDispatch();
    const List = useSelector((state) => state.todoReducer.List);
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (desc.length <= 3) {
      alert("You have to use a min 3 chars");
    } else {
      dispatch(
        addtask({
          id: Math.max.apply(
            null,
            List.map((item) => item.id+1)
          ),
          description: desc,
          isDone: false,
        })
      );
      setDesc("");
    }
  };
    const handleChange = (e) => {
    setDesc(e.target.value);
  };
  return (
    <div className={"add"}>
      <form onSubmit={handleSubmit}>
        <input
          
          placeholder="To Do"
          onChange={handleChange}
          value={desc}
          type="input"
          className="form__field"
          name="name"
          id="name"
          required
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTask;
