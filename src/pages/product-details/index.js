import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';

import { auth } from 'config/firebase';
import { useProducts, useDetailProducts } from 'hooks/useProduct';

const Index = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [changeProduct, setChangeProduct] = useState(false);
  const [isLoading, dataDetail, getDetailProduct] = useDetailProducts();
  const [isLoadingProduct, data, getProduct] = useProducts();
  const [detailOrder, setDetailOrder] = useState({
    size: '',
    quantity: 0
  });

  useEffect(() => {
    if (dataDetail.length < 1 || changeProduct) {
      getDetailProduct(productId);
      getProduct(Math.floor(Math.random() * 2 + 1), 4);
      setChangeProduct(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeProduct]);

  const handleClick = useCallback(
    id => {
      setChangeProduct(true);
      navigate(`/product/${id}`);
    },
    [navigate]
  );

  const handleAddToCart = () => {
    if (!user) {
      alert('Please login to add to cart');
      navigate('/sign-up');
    } else {
      const { id, name, price, thumbnail } = dataDetail;
      const { size, quantity } = detailOrder;
      const data = { id, name, price, thumbnail, size, quantity };
      if (size === '' || quantity === 0) {
        alert('Please fill all field');
      } else {
        dispatch({
          type: 'ADD_TO_CART',
          value: data
        });
        alert('Added to cart');
      }
    }
  };

  return isLoading && isLoadingProduct ? (
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
            <select
              onChange={e =>
                setDetailOrder({ ...detailOrder, size: e.target.value })
              }
            >
              <option value=''>Select Size</option>
              <option value='XXL'>XXL</option>
              <option value='XL'>XL</option>
              <option value='L'>L</option>
              <option value='M'>M</option>
              <option value='S'>S</option>
            </select>
            <input
              type='number'
              min='0'
              defaultValue={0}
              onChange={e =>
                setDetailOrder({ ...detailOrder, quantity: e.target.value })
              }
            />
            <div onClick={handleAddToCart} className='btn'>
              Add To Cart
            </div>

            <h3>
              Product Details <i className='fa fa-indent'></i>
            </h3>
            <br />
            <p>{dataDetail?.desc}</p>
          </div>
        </div>
      </div>
      {/* Related Product */}
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
    </div>
  );
};

export default Index;
