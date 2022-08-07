import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { images } from 'assets';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='small-container'>
        <div className='row row-2'>
          <h2>All Products</h2>
          <select>
            <option>Default Sort</option>
            <option>Sort By Price</option>
            <option>Sort By Popularity</option>
            <option>Sort By Rating</option>
            <option>Sort By Sale</option>
          </select>
        </div>
        <div className='row'>
          <div className='col-4'>
            <Link to='/product/1'>
              <img src={images['product-1.jpg']} alt='' />
            </Link>
            <h4>Red Printed T-Shirt</h4>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className='col-4'>
            <img src={images['product-2.jpg']} alt='' />
            <h4>Red Printed T-Shirt</h4>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className='col-4'>
            <img src={images['product-3.jpg']} alt='' />
            <h4>Red Printed T-Shirt</h4>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className='col-4'>
            <img src={images['product-4.jpg']} alt='' />
            <h4>Red Printed T-Shirt</h4>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <img src={images['product-5.jpg']} alt='' />
            <h4>Red Printed T-Shirt</h4>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className='col-4'>
            <img src={images['product-6.jpg']} alt='' />
            <h4>Red Printed T-Shirt</h4>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className='col-4'>
            <img src={images['product-7.jpg']} alt='' />
            <h4>Red Printed T-Shirt</h4>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className='col-4'>
            <img src={images['product-8.jpg']} alt='' />
            <h4>Red Printed T-Shirt</h4>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <img src={images['product-9.jpg']} alt='' />
            <h4>Red Printed T-Shirt</h4>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className='col-4'>
            <img src={images['product-10.jpg']} alt='' />
            <h4>Red Printed T-Shirt</h4>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className='col-4'>
            <img src={images['product-11.jpg']} alt='' />
            <h4>Red Printed T-Shirt</h4>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className='col-4'>
            <img src={images['product-12.jpg']} alt='' />
            <h4>Red Printed T-Shirt</h4>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
