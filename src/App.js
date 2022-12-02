import { Route, Routes } from "react-router";
import SignIn from "./autorization/SignIn";
import SignUp from "./autorization/SignUp";
import Home from "./todoList/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
