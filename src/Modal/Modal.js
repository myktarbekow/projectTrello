import ReactDOM from "react-dom";
import { AiFillCreditCard } from "react-icons/ai";
import { IoMdList } from "react-icons/io";
import { BiX } from "react-icons/bi";

import styled from "styled-components";

function Modal({ setOpenModal, openModal }) {
  const saveFunction = () => {
    alert("Успешно приняли!");
    setOpenModal(false);
  };

  return ReactDOM.createPortal(
    <>
      {openModal && (
        <StyledOpenModal>
          <ModalMain>
            <StyledColons>
              <AiFillCreditCard />
              <div>
                <span>Redux middleWare</span>
                <p>в колонке To do</p>
              </div>
            </StyledColons>
            <StyledDescription>
              <IoMdList />
              <div>
                <span>Описание</span>

                <Textarea
                  placeholder="Добавить более подробное описание..."
                  name=""
                  id=""
                  cols="60"
                  rows="10"
                />
              </div>
            </StyledDescription>
            <SaveStyled>
              <Button onClick={saveFunction}>Сохранить</Button>
              <Span onClick={() => setOpenModal(false)}>
                <BiX />
              </Span>
            </SaveStyled>
          </ModalMain>
        </StyledOpenModal>
      )}
    </>,
    document.getElementById("portal")
  );
}

const StyledOpenModal = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  z-index: 10;

  background-color: rgb(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalMain = styled.div`
  width: 800px;
  height: 600px;
  background-color: #dcdcdc;
  border-radius: 3px;

  padding: 0 10px;
`;

const StyledColons = styled.div`
  display: flex;

  gap: 10px;
  align-items: center;
  margin-top: 20px;

  & span {
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: 600;
    color: #00008b;
    margin: 0;
  }

  & p {
    color: grey;
  }
`;

const StyledDescription = styled.div`
  display: flex;

  gap: 10px;
  align-items: center;
  margin-top: 20px;

  & span {
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: 600;
    color: #00008b;
    margin: 0;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Textarea = styled.textarea`
  outline: none;
  border: none;
  border-radius: 3px;

  &:placeholder-shown {
    font-size: 16px;
  }
`;

const SaveStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 30px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;

  padding: 0;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: #1e90ff;

  &:hover {
    background-color: #0079bf;
  }
`;

const Span = styled.span`
  font-size: 50px;

  margin-top: 7px;
  color: grey;

  &:hover {
    cursor: pointer;
    color: black;
  }
`;
export default Modal;
