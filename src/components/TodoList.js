import React from "react";
import moment from "moment";
import "../App.css";
import TodoListItem from './TodoListItem';


const TodoList = (props) =>  {

    var items = props.items.map((item, index) => {
      return (
        <TodoListItem
          key={index}
          item={item}
          index={index}
          removeItem={props.removeItem}
          markTodoDone={props.markTodoDone}
        />
      );
    });
    return <ul className="list-group"> {items} </ul>;
  }


export default TodoList;
