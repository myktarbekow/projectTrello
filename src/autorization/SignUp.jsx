import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function SignUp() {
  const [infos, setInfos] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleClick(e) {
    if (!infos.email) return null;
    e.preventDefault();
    fetch("https://trelloclone-12ca9-default-rtdb.firebaseio.com/user.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: infos.email,
        password: infos.password,
      }),
    });

    navigate("/Home")
  }

  return (
    <Home>
      <Forma>
        <Trello>Зарегистрироваться в Trello</Trello>
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

        <Button onClick={handleClick}>Зарегистрироваться</Button>
        <Link to="/SignIn">already have account</Link>
      </Forma>
    </Home>
  );
}

const Home = styled.div`
  margin: 0 auto;
  height: 80vh;
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

export default SignUp;
