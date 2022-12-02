import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

function SignIn() {
  const [infos, setInfos] = useState({
    email: "",
    password: "",
  });

  const [signIn, setSignIn] = useState([]);

  const navigate = useNavigate();

  const loaded = [];

  useEffect(() => {
    fetch("https://trelloclone-12ca9-default-rtdb.firebaseio.com/user.json")
      .then((res) => res.json())
      .then((data) => {
        for (const key in data) {
          loaded.push(data[key]);
        }
      });
    setSignIn(loaded);
  }, []);

  function handleClick(e) {
    e.preventDefault();
    if (!infos.email.trim()) return null;
    if (!infos.password.trim()) return null;

    signIn.map((item) => {
      if (item.email === infos.email && item.password === infos.password) {
        navigate("/Home");
      } else {
        navigate("/");
      }
    });
  }

  return (
    <Home>
      <Forma>
        <Trello>Вход в Trello</Trello>
        <Input
          type="email"
          id="email"
          placeholder="Укажите адрес электронной почты"
          value={infos.email}
          onChange={(e) => setInfos({ ...infos, email: e.target.value })}
        />

        <Input
          type="password"
          id="password"
          placeholder="Введите пароль"
          value={infos.password}
          onChange={(e) => setInfos({ ...infos, password: e.target.value })}
        />

        <Button onClick={handleClick}>Войти</Button>
      </Forma>
    </Home>
  );
}

const Home = styled.div`
  margin: 0 auto;

  display: flex;
  justify-content: center;

  padding: 100px 0;
`;

const Forma = styled.form`
  width: 50%;
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: white;
  -webkit-box-shadow: -12px 6px 89px 0px rgba(34, 60, 80, 0.29);
  -moz-box-shadow: -12px 6px 89px 0px rgba(34, 60, 80, 0.29);
  box-shadow: -12px 6px 89px 0px rgba(34, 60, 80, 0.29);
  border-radius: 5px;
`;

const Trello = styled.h2`
  color: #4b0082;
`;

const Input = styled.input`
  width: 68%;
  padding: 10px;
  margin: 10px auto;
  outline: none;
  border: none;
  border: 2px solid #1e90ff;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 71%;
  margin: 0 auto;
  padding: 10px;
  font-weight: 600;
  color: white;
  background-color: #32cd32;
  border: none;
  border-radius: 5px;
  font-size: 20px;
`;

export default SignIn;
