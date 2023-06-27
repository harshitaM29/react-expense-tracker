import AuthPage from "./pages/AuthPage";
import {Route, Switch} from 'react-router-dom';
import AuthForm from "./components/Auth/AuthForm";
import HomePage from "./pages/HomePage";
import { Fragment } from "react";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from './pages/ProfilePage';
import ForgetPassPage from './pages/ForgetPassPage';
import ExpenseContextProvider from "./store/ExpenseContextProvider";


function App() {
  return(
    <Switch>
  <Route path='/' exact>
    <AuthPage />
  </Route>
  <Route path='/signup' >
    <SignUpPage />
  </Route>
  <ExpenseContextProvider>
  <Route path='/home'>
    <HomePage />
  </Route>
  </ExpenseContextProvider>
  <Route path='/profile'>
  <ProfilePage />
  </Route>
  <Route path='/forget'>
  <ForgetPassPage />
  </Route>
  </Switch>
 
  );
}

export default App;
