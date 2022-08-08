import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Index = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.productOrder);
  const subTotalPrice = data.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const tax = ((10 / 100) * subTotalPrice).toFixed(2);
  const totalPrice = (subTotalPrice + parseFloat(tax)).toFixed(2);
  return (
    <div>
      <div className='small-container cart-page'>
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>
                <div className='cart-info'>
                  <img loading='lazy' src={item.thumbnail} alt='' />
                  <div>
                    <p>{item.name}</p>
                    <small>Price: ${item.price}</small>
                    <br />
                    <div
                      style={{ fontSize: '12px', color: 'red' }}
                      onClick={() =>
                        dispatch({ type: 'REMOVE_FROM_CART', value: item })
                      }
                    >
                      {' '}
                      Remove
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <input
                  type='number'
                  min={1}
                  defaultValue={item.quantity}
                  onChange={e =>
                    dispatch({
                      type: 'CHANGE_QUANTITY_ITEM',
                      value: e.target.value,
                      id: item.id
                    })
                  }
                />
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </table>
        <div className='total-price'>
          <table>
            <tr>
              <td>Subtotal</td>
              <td>${subTotalPrice}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>${tax}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${totalPrice}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
