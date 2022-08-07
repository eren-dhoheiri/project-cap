import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useProducts, useDetailProducts } from 'hooks/useProduct';

const Index = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [changeProduct, setChangeProduct] = useState(false);
  const [isLoading, dataDetail, getDetailProduct] = useDetailProducts();
  const [isLoadingProduct, data, getProduct] = useProducts();

  useEffect(() => {
    if (dataDetail.length < 1 || changeProduct) {
      getDetailProduct(productId);
      setChangeProduct(false);
    }
  }, [changeProduct, dataDetail, getDetailProduct, productId]);

  useEffect(() => {
    if (data.length < 1 || changeProduct) {
      getProduct(Math.random() * 2, 4, '', '');
    }
  }, [changeProduct, data.length, getProduct]);

  const handleClick = id => {
    setChangeProduct(true);
    navigate(`/product/${id}`);
  };

  return isLoading ? (
    <div style={{ height: '100vh', textAlign: 'center' }}>
      Loading Product...
    </div>
  ) : (
    <div>
      <div className='small-container single-product'>
        <div className='row'>
          <div className='col-2'>
            <img
              src={dataDetail?.thumbnail}
              alt=''
              width='100%'
              id='ProductImg'
            />
            <div className='small-img-row'>
              {dataDetail?.image?.map((image, idx) => (
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
            <p>Home / Product / Product Details</p>
            <h1>{dataDetail?.name}</h1>
            <h4>${dataDetail?.price}</h4>
            <select onChange={e => console.log(e.target.value)}>
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
            <p>{dataDetail?.desc}</p>
          </div>
        </div>
      </div>

      {isLoadingProduct ? (
        <></>
      ) : (
        <div>
          <div className='small-container'>
            <div className='row row-2'>
              <h2>Related Products</h2>
              <p
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/product')}
              >
                View More
              </p>
            </div>
          </div>

          <div className='small-container'>
            <div className='row'>
              {data?.map(product => (
                <div className='col-4' key={product.id}>
                  <div onClick={() => handleClick(product.id)}>
                    <img src={product.thumbnail} alt='' width='100%' />
                  </div>
                  <h4>{product.name}</h4>
                  <div className='rating'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-o'></i>
                  </div>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
