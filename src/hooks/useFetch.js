import { useState, useCallback } from 'react';

const useFetch = (url, method = 'GET', options = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    console.log('fetching data', url); 
    try {
      const response = await fetch(url, {
        method,
        ...options,
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      console.log('result', result)
      setData(result);
      // console.log(JSON.parse(result))
    } catch (error) {
      setError(error);
      console.log('error',error)
    } finally {
      setIsLoading(false);
    }
  }, [url, method, options]);

  return { data, isLoading, error, fetchData };
};

export default useFetch;
