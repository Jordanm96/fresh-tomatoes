import './App.css';

 import { useState, useEffect} from 'react';
 import { Switch, Route, useHistory } from 'react-router-dom';

import Layout from './components/shared/Layout/Layout';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import MainContainer from './containers/MainContainer';



function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory()

  useEffect(() => {
    const handleverify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleverify()
  }, [])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/movies')
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/movies')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken');
    removeToken()
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path= '/login'>
            <Login handleLogin={handleLogin} />
          </Route>

          <Route path= '/register'>
            <Register handleRegister={handleRegister}/>
          </Route>

          <Route path='/'>
            <MainContainer />
          </Route>

          
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
