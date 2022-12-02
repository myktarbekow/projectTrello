import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { BiX } from "react-icons/bi";
import { HiPencilAlt } from "react-icons/hi";
import styled from "styled-components";
import { addSubTask } from "../store/todoSlice";

import Modal from "../Modal/Modal";

function TodoItem({ text, iD, subtask }) {
  const [openInput, setOpenInput] = useState(false);
  const [value, setValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  function addSubTasks() {
    if (!value) return alert("Пожалуйста, заполните поле!");
    dispatch(
      addSubTask({
        iD,
        subtask: { title: value, id: Math.random().toString() },
      })
    );

    setValue("");
  }
  return (
    <Toto>
      <TodoRow>
        <ContentRow>
          <span>{text}</span>
          <Menus>
            <BsThreeDots />
          </Menus>
        </ContentRow>
      </TodoRow>
      <TodoRow2>
        {openInput ? (
          <div>
            <Textarea
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="Ввести заголовок для этой карточки"
              cols="30"
              rows="5"
              name="information"
            />
            {subtask.map((item) => {
              return (
                <StyledSubTasks
                  onClick={() => setOpenModal(true)}
                  key={item.id}
                >
                  <SubTaskTextarea
                    defaultValue={item.title}
                    cols="30"
                    rows="2"
                  />
                  <Pensil>
                    <HiPencilAlt />
                  </Pensil>
                </StyledSubTasks>
              );
            })}

            <ContainerInButtons>
              <Button onClick={addSubTasks}>Добавить карточку</Button>
              <Span onClick={() => setOpenInput(false)}>
                <BiX />
              </Span>
            </ContainerInButtons>
          </div>
        ) : (
          <AddCart onClick={() => setOpenInput(true)}>
            <CgMathPlus />
            Добавить карточку
          </AddCart>
        )}
      </TodoRow2>

      <Modal
        // handleDelete={handleDelete}
        // modalId={modalId}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Toto>
  );
}

const Toto = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const TodoRow = styled.div`
  margin: 0;

  background-color: #ffffff9d;

  width: 250px;

  padding: 10px 20px;
  border-radius: 3px 3px 0 0;
  margin-top: 10px;
`;

const TodoRow2 = styled.div`
  background-color: #ffffff9d;
  padding: 10px 20px;

  width: 250px;
  border-radius: 0 0 3px 3px;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddCart = styled.div`
  width: 200px;
  padding: 4px 4px;
  display: flex;
  align-items: center;
  border-radius: 2px;

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }
`;

const StyledSubTasks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  background-color: white;
  cursor: pointer;
`;

const SubTaskTextarea = styled.textarea`
  border: none;
  border-radius: 3px 0 0 3px;
  outline: none;
  padding: 3px;
  resize: none;
`;

const Menus = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-radius: 4px;
    background-color: #d3d3d3;
    text-align: center;
    cursor: pointer;
  }
  &:active {
    background-color: grey;
  }
`;

const ContainerInButtons = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
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

const Span = styled.span`
  font-size: 40px;

  margin-top: 7px;
  color: grey;

  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 3px;
  outline: none;
  padding: 3px;
  resize: none;
  margin-top: 10px;

  &::placeholder {
    font-size: 16px;
  }
`;

const Pensil = styled.div`
  width: 30px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #d3d3d3;
    border-radius: 3px;
  }

  &:active {
    background-color: gray;
  }
`;

export default TodoItem;
