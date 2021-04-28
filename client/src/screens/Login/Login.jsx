import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h3>LOG IN</h3>
      <form onSubmit= {(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={username} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange} 
          />
        </label>
        <button>GO</button>
        <Link to='/register'>REGISTER HERE</Link>
      </form>
    </div>
  );
};

export default Login;