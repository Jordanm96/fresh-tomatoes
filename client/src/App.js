import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import Layout from './components/shared/Layout/Layout';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import { loginUser } from './services/auth';



function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
  }

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path= '/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path= '/register'>
            <Register />
          </Route>
          <Route path= '/movies'>
          
          </Route> 
          <Route path= '/movies/:id'>
          
          </Route>
          <Route path= '/movies/create'>
          
          </Route>
          <Route path='/movies/:id/edit'>
          
          </Route>
          <Route path= '/movies/:id/review'>
          
          </Route>
          
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
