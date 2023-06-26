import AuthPage from "./pages/AuthPage";
import {Route, Switch} from 'react-router-dom';
import AuthForm from "./components/Auth/AuthForm";
import HomePage from "./pages/HomePage";
import { Fragment } from "react";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from './pages/ProfilePage'
function App() {
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
  </Switch>
 
  );
}

export default App;
