import AuthPage from "./pages/AuthPage";
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from './pages/ProfilePage';
import ForgetPassPage from './pages/ForgetPassPage';
import EditPage from "./pages/EditPage";
import {themeActions} from './store/theme';
import { useSelector } from 'react-redux';


function App() {
  const isDarkMode = useSelector(state => state.theme.isClicked)

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#292c35" : "#fff";
  }, [isDarkMode]);
  return(
    <Switch>
  <Route path='/' exact>
    <AuthPage />
  </Route>
  <Route path='/signup' >
    <SignUpPage />
  </Route>

  <Route path='/home'>
    <HomePage />
  </Route>

  <Route path='/profile'>
  <ProfilePage />
  </Route>
  <Route path='/forget'>
  <ForgetPassPage />
  </Route>
  <Route path='/edit'>
    <EditPage />
  </Route>
 
  </Switch>
 
  );
}

export default App;
