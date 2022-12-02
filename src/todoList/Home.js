import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../store/todoSlice";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { CgMathPlus } from "react-icons/cg";

const Home = () => {
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  console.log();
  const addTask = () => {
    if (text.trim().length !== 0) {
      dispatch(
        addTodo({
          text: text,
          id: Math.random().toString(),
          subtask: [],
        })
      );
    } else {
      alert("Пожалуйста, заполните поле!");
    }
    setText("");
  };

  return (
    <StyledMain>
      <Container>
        <TodoList />
        {isShow ? (
          <>
            <TodoForm
              text={text}
              handleInput={setText}
              handleSubmit={addTask}
              isShow={isShow}
              setIsShow={setIsShow}
            />
          </>
        ) : (
          <Button onClick={() => setIsShow(true)}>
            <CgMathPlus />
            Добавить список
          </Button>
        )}
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  height: 100vh;
  background-size: cover;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  max-width: 1600px;
`;

const Container = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
`;

const Button = styled.button`
  background-color: #00000014;
  border: none;
  width: 250px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #00000033;
  }
`;

export default Home;
