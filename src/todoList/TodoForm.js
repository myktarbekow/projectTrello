import React from "react";
import styled from "styled-components";
import { BiX } from "react-icons/bi";

function TodoForm({ text, handleInput, handleSubmit, setIsShow, isShow }) {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Forma onSubmit={submitHandler}>
      <Input
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
        maxLength="25"
      />
      <ContainerInButtons>
        <Button onClick={handleSubmit}> Добавить карточку</Button>
        <Span onClick={() => setIsShow(false)}>
          <BiX />
        </Span>
      </ContainerInButtons>
    </Forma>
  );
}

const Forma = styled.form`
  width: 250px;
  height: 100px;

  margin-left: 8px;
  background-color: #ffffff3d;
  padding: 3px 2px;
`;

const Input = styled.input`
  width: 240px;
  padding: 7px 0;
  margin-left: 3px;
  outline: none;
  border: 2px solid #0079bf;
  border-radius: 3px;
`;

const ContainerInButtons = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
`;

const Span = styled.span`
  font-size: 40px;

  margin-top: 7px;
  color: grey;

  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const Button = styled.button`
  padding: 7px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: #1e90ff;

  &:hover {
    background-color: #0079bf;
  }
`;

export default TodoForm;
