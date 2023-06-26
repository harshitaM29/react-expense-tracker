import AuthPage from "./pages/AuthPage";
import {Route} from 'react-router-dom';
import AuthForm from "./components/Auth/AuthForm";

function App() {
  return(
  <Route path='/' >
    <AuthPage />
  </Route>
  );
}

export default App;
