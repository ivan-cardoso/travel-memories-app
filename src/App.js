
import { Routes, Route } from "react-router-dom"
import Home from './views/Home/Home';
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

const App = () => {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/register'} element={<Register/>} />
        <Route path={'/login'} element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
