import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { images } from 'assets';

const Index = () => {
  console.log(images);
  const location = useLocation();
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
                <li>
                  <Link to='/sign-in'>Sign in</Link>
                </li>
              </ul>
            </nav>
            <Link to='/cart'>
              <img src={images['cart.png']} alt='' width='30px' height='30px' />
            </Link>

            <img
              src='assets/images/menu.png'
              alt=''
              className='menu-icon'
              onclick='menutoggle()'
            />
          </div>
          {location.pathname === '/' && (
            <div className='row'>
              <div className='col-2'>
                <h1>
                  Give Your Workout <br />A New Style!
                </h1>
                <p>
                  Success isn't always about greatness. It;s about consistency.
                  Consistent <br />
                  hard work gains success. Greatness will come.
                </p>
                <a href='/' className='btn'>
                  Explore Now &#8594;
                </a>
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
