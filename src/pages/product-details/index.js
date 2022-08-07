import React, { useEffect } from 'react';
import { images } from 'assets';
import { useParams } from 'react-router-dom';

import { useDetailProducts } from 'hooks/useProduct';

const Index = () => {
  const { productId } = useParams();
  const [isLoading, data, getDetailProduct] = useDetailProducts();

  useEffect(() => {
    if (data.length < 1) {
      getDetailProduct(productId);
    }
  }, [data.length, getDetailProduct, productId]);

  return isLoading ? (
    <div style={{ height: '100vh', textAlign: 'center' }}>
      Loading Product...
    </div>
  ) : (
    <div>
      <div className='small-container single-product'>
        <div className='row'>
          <div className='col-2'>
            <img src={data?.thumbnail} alt='' width='100%' id='ProductImg' />
            <div className='small-img-row'>
              {data?.image?.map((image, idx) => (
                <div className='small-img-col' key={idx}>
                  <img
                    src={`${image}`}
                    alt=''
                    width='100%'
                    className='small-img'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='col-2'>
            <p>Home / Product Details</p>
            <h1>{data?.name}</h1>
            <h4>${data?.price}</h4>
            <select>
              <option value=''>Select Size</option>
              <option value='XXL'>XXL</option>
              <option value='XL'>XL</option>
              <option value='L'>L</option>
              <option value='M'>M</option>
              <option value='S'>S</option>
            </select>
            <input type='number' value='1' />
            <a href='/' className='btn'>
              Add To Cart
            </a>

            <h3>
              Product Details <i className='fa fa-indent'></i>
            </h3>
            <br />
            <p>{data?.desc}</p>
          </div>
        </div>
      </div>
      {/* <!-- title --> */}
      <div className='small-container'>
        <div className='row row-2'>
          <h2>Related Products</h2>
          <p>View More</p>
        </div>
      </div>

      {/* <!-- Products --> */}
      <div className='small-container'>
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
