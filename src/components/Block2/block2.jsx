import React from "react";
import s from "./block2.module.css";
const Block2 = (props) => {
  return (
    <div className={s.block2}>
      <div>Process</div>
      {props.todo.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
        </div>
      ))}
      <div className="work">Work</div>
      {props.todo.map((item) =>
        item.type === "work" ? (
          <div key={item.id}>
            <div>{item.name}</div>
          </div>
        ) : (
          ""
        )
      )}

      <div className="hobby">Hobby</div>
      {props.todo.map((item) =>
        item.type === "hobby" ? (
          <div key={item.id}>
            <div>{item.name}</div>
          </div>
        ) : (
          ""
        )
      )}
      <div className="etc">Study</div>
      {props.todo.map((item) =>
        item.type === "study" ? (
          <div key={item.id}>
            <div>{item.name}</div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Block2;
