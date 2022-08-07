import { useState, useEffect } from 'react';
import api from 'config/api';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getAllProduct = async () => {
    try {
      setIsLoading(true);
      const res = await api.get('/product');
      setData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (data.length < 1) {
      getAllProduct();
    }
  }, [data]);

  return [isLoading, data, getAllProduct];
};

export const useDetailProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getProductDetail = async id => {
    try {
      setIsLoading(true);
      const res = await api.get(`/product/${id}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, data, getProductDetail];
};
