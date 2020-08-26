import React from "react";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};
interface todosObject {
  userID?: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  todos: todosObject[];
  onToggle: (id: number) => void;
}
function TodoList(props: Props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            index={index}
            todo={todo}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
