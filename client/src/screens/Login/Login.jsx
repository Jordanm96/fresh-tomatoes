import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css'
const Login = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
      <div className='heading'>
      <h3>LOG IN</h3>
      </div>

      <form className='user-form' onSubmit= {(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}>
        <div className='inputs'>

        <label className= 'login'>
          Username:
          </label>
          <input
            type='text'
            name='username'
            value={username} 
            onChange={handleChange}
            className= 'login'
            />
        <label className= 'login'>
          Password:
          </label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            className= 'login'
            />
          <button>GO</button>
          <label className= 'link'>Don't have an account? {" "}

        <Link to='/register'>REGISTER HERE</Link>
          </label>
            </div>
      </form>
    </>
  );
};

export default Login;