
import { Routes, Route } from "react-router-dom"
import Home from './views/Home/Home';
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {

  return (
    <>
      <GoogleOAuthProvider clientId={'915610588755-stsi22gi8kntir2r0ninj75llh6g9a2a.apps.googleusercontent.com'}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/login'} element={<Login />} />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
