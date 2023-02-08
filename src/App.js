import { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './views/Home/Home';
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch } from 'react-redux'
import useStorage from './hooks/useStorage'
import { setCrendentials } from './store/reducers/user';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {

  const dispatch = useDispatch()

  const { isLogged } = useStorage()

  useEffect(() => {
    const user = isLogged()
    if (user) dispatch(setCrendentials(user))
  }, [dispatch]);

  return (
    <>
      <GoogleOAuthProvider clientId={'915610588755-stsi22gi8kntir2r0ninj75llh6g9a2a.apps.googleusercontent.com'}>

        <NavBar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/login'} element={<Login />} />
        </Routes>
        <Footer />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
