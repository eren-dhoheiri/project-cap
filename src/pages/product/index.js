import React from 'react';
import { Link } from 'react-router-dom';

import { useProducts } from 'hooks/useProduct';

const Index = () => {
  const [isLoading, data] = useProducts();

  return isLoading ? (
    <div style={{ height: '100vh', textAlign: 'center' }}>
      Loading Product...
    </div>
  ) : (
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
          {data?.map(product => (
            <div className='col-4' key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  // src={images[`product-${product.id}.jpg`]}
                  src={product.thumbnail}
                  alt={product.name}
                />
              </Link>
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
  );
};

export default Index;
