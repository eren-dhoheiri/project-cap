import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { images } from 'assets';

import { auth, db, logout } from 'config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { query, collection, getDocs, where } from 'firebase/firestore';

const Index = () => {
  const [name, setName] = useState('');
  const [user] = useAuthState(auth);
  const location = useLocation();

  const fetchUserName = useCallback(async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  }, [user]);

  const menuToggle = () => {
    let MenuItems = document.getElementById('MenuItems');
    if (MenuItems.style.maxHeight === '0px') {
      MenuItems.style.maxHeight = '200px';
    } else {
      MenuItems.style.maxHeight = '0px';
    }
  };

  useEffect(() => {
    document.getElementById('MenuItems').style.maxHeight = '0px';
    if (user) {
      fetchUserName();
    }
  }, [user, fetchUserName]);

  return (
    <div>
      <div className='header'>
        <div className='container'>
          <div className='navbar'>
            <div className='logo'>
              <Link to='/'>
                <b>CAP Shop</b>
              </Link>
            </div>
            <nav>
              <ul id='MenuItems'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/product'>Products</Link>
                </li>
                {user ? (
                  <li>
                    <div
                      style={{
                        border: '1px solid black',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        padding: '5px',
                        fontSize: '10px'
                      }}
                      onClick={logout}
                    >
                      Logout
                    </div>
                  </li>
                ) : (
                  <li>
                    <Link to='/sign-up'>SignIn</Link>
                  </li>
                )}
              </ul>
            </nav>
            {user && (
              <Link to='/cart'>
                <img
                  src={images['cart.png']}
                  alt=''
                  width='30px'
                  height='30px'
                />
              </Link>
            )}

            <img
              src={images['menu.png']}
              alt=''
              className='menu-icon'
              onClick={menuToggle}
            />
          </div>
          {location.pathname === '/' && (
            <div className='row'>
              <div className='col-2'>
                <h1>
                  {user && `Hi, ${name.toLocaleUpperCase()}! `} <br />
                  Give Your Workout <br />A New Style!
                </h1>
                <p>
                  Success isn't always about greatness. It;s about consistency.
                  Consistent <br />
                  hard work gains success. Greatness will come.
                </p>
                <Link to='/product' className='btn'>
                  Explore Now &#8594;
                </Link>
              </div>
              <div className='col-2'>
                <img src={images['image1.png']} alt='' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
