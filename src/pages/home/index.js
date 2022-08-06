import React from 'react';
import { images } from 'assets';

const Index = () => {
  return (
    <>
      {/* <!-- Feadtued Categories --> */}
      <div className='categories'>
        <div className='small-container'>
          <div className='row'>
            <div className='col-3'>
              <img src={images['category-1.jpg']} alt='' />
            </div>
            <div className='col-3'>
              <img src={images['category-2.jpg']} alt='' />
            </div>
            <div className='col-3'>
              <img src={images['category-3.jpg']} alt='' />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Featured Products --> */}
      <div className='small-container'>
        <h2 className='title'>Featured Products</h2>
        <div className='row'>
          <div className='col-4'>
            <a href='product_details.html'>
              <img src={images['product-1.jpg']} alt='' />
            </a>
            <h4>Red Printed T-Shirt</h4>
            <div className='rating' alt=''>
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
            <div className='rating' alt=''>
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
            <div className='rating' alt=''>
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
            <div className='rating' alt=''>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-o'></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
        <h2 className='title'>Latest Products</h2>
        <div className='row'>
          <div className='col-4'>
            <img src={images['product-5.jpg']} alt='' />
            <h4>Red Printed T-Shirt</h4>
            <div className='rating' alt=''>
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
            <div className='rating' alt=''>
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
            <div className='rating' alt=''>
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
            <div className='rating' alt=''>
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
            <div className='rating' alt=''>
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
            <div className='rating' alt=''>
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
            <div className='rating' alt=''>
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
            <div className='rating' alt=''>
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

      {/* <!-- Offer --> */}
      <div className='offer'>
        <div className='small-container'>
          <div className='row'>
            <div className='col-2'>
              <img src={images['exclusive.png']} alt='' className='offer-img' />
            </div>
            <div className='col-2'>
              <p>Exclusively Available on CAP Shop</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 fearures a 39.9%larger (than Mi Band 3)
                AMOLED color full-touch display with adjustable brightness, so
                everything is clear as can be.
                <br />
              </small>
              <a href='products.html' className='btn'>
                Buy Now &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Testimonial --> */}
      <div className='testimonial'>
        <div className='small-container'>
          <div className='row'>
            <div className='col-3'>
              <i className='fa fa-quote-left'></i>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been industry's standard dummy text.
              </p>
              <div className='rating' alt=''>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <img src={images['user-1.png']} alt='' />
              <h3>Sean Parker</h3>
            </div>
            <div className='col-3'>
              <i className='fa fa-quote-left'></i>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been industry's standard dummy text.
              </p>
              <div className='rating' alt=''>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <img src={images['user-2.png']} alt='' />
              <h3>Mike Smith</h3>
            </div>
            <div className='col-3'>
              <i className='fa fa-quote-left'></i>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been industry's standard dummy text.
              </p>
              <div className='rating' alt=''>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <img src={images['user-3.png']} alt='' />
              <h3>Mabel Joe</h3>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Brands --> */}

      <div className='brands'>
        <div className='small-container'>
          <div className='row'>
            <div className='col-5'>
              <img src={images['logo-godrej.png']} alt='' />
            </div>
            <div className='col-5'>
              <img src={images['logo-oppo.png']} alt='' />
            </div>
            <div className='col-5'>
              <img src={images['logo-coca-cola.png']} alt='' />
            </div>
            <div className='col-5'>
              <img src={images['logo-paypal.png']} alt='' />
            </div>
            <div className='col-5'>
              <img src={images['logo-philips.png']} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
