import AuthPage from "./pages/AuthPage";
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from './pages/ProfilePage';
import ForgetPassPage from './pages/ForgetPassPage';
import EditPage from "./pages/EditPage";
import { useSelector, useDispatch } from 'react-redux';
import { sendExpenseItems, fetchExpenseData } from "./store/expense-actions";

let isInitial = true;
function App() {
  const isDarkMode = useSelector(state => state.theme.isClicked)
  const isLogin = useSelector(state => state.auth.isLoggedIn)
  const expense = useSelector(state => state.expense)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenseData())
  },[dispatch])

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }
    if(expense.changed) {
      dispatch(sendExpenseItems(expense));
    }
  }, [expense,dispatch])

 
   useEffect(() => {
    if(isLogin) {
    document.body.style.backgroundColor = isDarkMode ? "#292c35" : "#fff";
    } else {
      document.body.style.backgroundColor =  "#fff";
    }
  }, [isDarkMode, isLogin]);

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
