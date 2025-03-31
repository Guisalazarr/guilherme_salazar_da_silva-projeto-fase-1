import { useState, useEffect } from 'react';
import axios from 'axios';

const ToList = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/books');
        setData(response.data);

      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []);

  return data;
};

export default ToList;