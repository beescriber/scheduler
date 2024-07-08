import React, {useEffect, useState, useContext} from "react";
import AppContext from './context';
import lightTheme from './styling/lightTheme';
import darkTheme from './styling/darkTheme';
import { ThemeProvider } from "@mui/material/styles";
import Notification from './components/Notification';
import {connect} from 'react-redux';
import Home from './containers/Home';
import { Route, useNavigate, Routes} from 'react-router-dom';

const App = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState({});
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  const [env, setEnv] = useState(null);
  const [jwt, setJwt] = useState(null);

  useEffect (() => {
    setDarkMode (props.darkMode);
  }, [props.darkMode]);

  return (
    <AppContext.Provider value={{darkMode: darkMode, user: user, jwt: jwt}}>
      <ThemeProvider theme={darkMode? darkTheme: lightTheme}>
        <Notification severity={notification.severity} message={notification.message}/>
        <Routes>
          <Route path={'/'} element={<Home readOnly={false}/>}/>
        </Routes>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export const mapStateToProps = state => ({
  darkMode: state.darkMode,
  testProp: state.testProp
});

export default connect(mapStateToProps)(App);
