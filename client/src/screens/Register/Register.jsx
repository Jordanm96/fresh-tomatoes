import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { username, email, password } = formData;
  const { handleRegister } = props;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }


  return (
    <>
      <h3>REGISTER</h3>
      <form className='user-form' onSubmit= {(e) => {
        e.preventDefault();
        handleRegister(formData);
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
          Email:
          </label>
          <input
            type='text'
            name='email'
            value={email} 
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
        {/* <label>
          Password Confirm:
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange} 
          />
        </label> */}
          <button>GO</button>
          <label className= 'link'>Already have an account? {" "}
        <Link to='/login'>LOG IN HERE</Link>
          </label>
        </div>

      </form>
    </>
  );
};

export default Register;