import React from "react";

import { useSelector } from "react-redux";

import styled from "styled-components";

import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = useSelector((state) => state.todos.todos);

  return (
    <Ul>
      {todoList.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            text={todo.text}
            iD={todo.id}
            subtask={todo.subtask}
          />
        );
      })}
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  margin-top: -10px;
`;

export default TodoList;
