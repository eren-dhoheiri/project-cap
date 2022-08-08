import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useProducts } from 'hooks/useProduct';

const Index = () => {
  const [sort, setSort] = useState('');
  const [isLoading, data, getAllProduct] = useProducts();

  useEffect(() => {
    if (data.length < 1) {
      getAllProduct(1, 12, '', '');
    }
  }, [data.length, getAllProduct]);

  const handleSort = params => {
    setSort(params);
    getAllProduct(1, 12, `${params}`, 'asc');
  };

  return isLoading ? (
    <div style={{ height: '100vh', textAlign: 'center' }}>
      Loading Product...
    </div>
  ) : (
    <div>
      <div className='small-container'>
        <div className='row row-2'>
          <h2>All Products</h2>
          <select
            onChange={e => handleSort(e.target.value)}
            defaultValue={sort}
          >
            <option value='id'>Default Sort</option>
            <option value='price'>Sort By Cheap Price</option>
          </select>
        </div>
        <div className='row'>
          {data?.map(product => (
            <div className='col-4' key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  loading='lazy'
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
