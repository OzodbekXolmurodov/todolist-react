import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./Todo.scss";

const Tudu = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      return null;
    }
    if (edit) {
      let updatedTodo = { ...edit, text };
      setData(data?.map((item) => (item.id === edit.id ? updatedTodo : item)));
      setEdit(null);
    } else {
      let date = new Date();
      let newTodu = {
        id: uuidv4(),
        text,
        time: `${date.getHours()}:${date.getMinutes()}`,
      };
      setData([...data, newTodu]);
    }
    setText("");
  };
  const hendilDlet = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const handelEdit = (todo) => {
    setEdit(todo);
    setText(todo.text);
  };
  return (
    <>
      <div className="conteaner todu">
        <h2 className="todu__h2">TodoList</h2>
        <div className="todu__div-main">
          <form onSubmit={handleSubmit} action="">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="todu__input"
              type="text"
            />
            {text.trim() && (
              <button className="todu__btn">{edit ? "Save" : "Create"}</button>
            )}
          </form>
          <hr className="todu__hr" />
          <div className="todu__div">
            {data?.map((item) => (
              <div className="todu__list" key={item.id}>
                <div className="todu__text2">
                  <span className="todu__text">{item.text}</span>
                  <span className="todu__date">{item.time}</span>
                </div>
                <div className="todu__idit">
                  <button
                    className="todu__dlet"
                    onClick={() => hendilDlet(item.id)}
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={() => handelEdit(item)}
                    className="todu__idit"
                  >
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tudu;
