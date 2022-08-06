import React from 'react';
import { images } from 'assets';

const Index = () => {
  return (
    <div>
      <div className='small-container cart-page'>
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>
              <div className='cart-info'>
                <img src={images['buy-1.jpg']} alt='' />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>Price: $50.00</small>
                  <br />
                  <a href='/'>Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type='number' value='1' />
            </td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div className='cart-info'>
                <img src={images['buy-2.jpg']} alt='' />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>Price: $50.00</small>
                  <br />
                  <a href='/'>Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type='number' value='1' />
            </td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div className='cart-info'>
                <img src={images['buy-3.jpg']} alt='' />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>Price: $50.00</small>
                  <br />
                  <a href='/'>Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type='number' value='1' />
            </td>
            <td>$50.00</td>
          </tr>
        </table>
        <div className='total-price'>
          <table>
            <tr>
              <td>Subtotal</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$35.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$230.00</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
