import React, { useState, useEffect } from 'react';
import {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword
} from 'config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { images } from 'assets';

const Index = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // State for the form
  const [dataLogin, setDataLogin] = useState({ email: '', password: '' });
  const [dataRegister, setDataRegister] = useState({
    name: '',
    email: '',
    password: ''
  });

  // handle the form data
  const handleSubmit = async (e, params) => {
    e.preventDefault();
    if (params === 'login') {
      await logInWithEmailAndPassword(dataLogin.email, dataLogin.password);
    } else {
      await registerWithEmailAndPassword(
        dataRegister.name,
        dataRegister.email,
        dataRegister.password
      );
      alert('User created successfully');
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/');
    if (error) alert(error);
  }, [loading, user, error, navigate]);

  // handle menu toggle
  const onClickToggle = params => {
    const LoginForm = document.getElementById('LoginForm');
    const RegForm = document.getElementById('RegForm');
    const Indicator = document.getElementById('Indicator');
    if (params === 'login') {
      RegForm.style.transform = 'translatex(300px)';
      LoginForm.style.transform = 'translatex(300px)';
      Indicator.style.transform = 'translate(0px)';
    } else {
      RegForm.style.transform = 'translatex(0px)';
      LoginForm.style.transform = 'translatex(0px)';
      Indicator.style.transform = 'translateX(100px)';
    }
  };

  return (
    <div>
      <div className='account-page'>
        <div className='container'>
          <div className='row'>
            <div className='col-2'>
              <img
                loading='lazy'
                src={images['image1.png']}
                alt=''
                width='100%'
              />
            </div>
            <div className='col-2'>
              <div className='form-container'>
                <div className='form-btn'>
                  <span onClick={() => onClickToggle('login')}>Login</span>
                  <span onClick={() => onClickToggle('register')}>
                    Register
                  </span>
                  <hr id='Indicator' />
                </div>

                <form id='LoginForm'>
                  <input
                    type='text'
                    placeholder='Email'
                    onChange={e =>
                      setDataLogin({ ...dataLogin, email: e.target.value })
                    }
                  />
                  <input
                    type='password'
                    placeholder='Password'
                    onChange={e =>
                      setDataLogin({ ...dataLogin, password: e.target.value })
                    }
                  />
                  <button
                    type='submit'
                    className='btn'
                    onClick={e => handleSubmit(e, 'login')}
                  >
                    Login
                  </button>
                  <a href='/'>Forget Password</a>
                </form>

                <form id='RegForm'>
                  <input
                    type='text'
                    placeholder='name'
                    onChange={e =>
                      setDataRegister({ ...dataRegister, name: e.target.value })
                    }
                  />
                  <input
                    type='email'
                    placeholder='Email'
                    onChange={e =>
                      setDataRegister({
                        ...dataRegister,
                        email: e.target.value
                      })
                    }
                  />
                  <input
                    type='password'
                    placeholder='Password'
                    onChange={e =>
                      setDataRegister({
                        ...dataRegister,
                        password: e.target.value
                      })
                    }
                  />
                  <button
                    type='submit'
                    className='btn'
                    onClick={e => handleSubmit(e, 'register')}
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
