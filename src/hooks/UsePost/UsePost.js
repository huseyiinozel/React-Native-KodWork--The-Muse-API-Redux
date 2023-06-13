import { useEffect, useState } from "react";
import axios from 'axios';

function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

  const postData = async (url,apiData) => {
    try {
     

      const { data: responseData } = await axios.post(url,apiData);
      setData(responseData)
      setLoading(false);
      
      
      
    } catch (err) {
      setLoading(false);
      setError(err);
      
    }
  }

  const handleLogin = (values) => {
    setError(false); 
    postData("https://fakestoreapi.com/auth/login", values);
  };



  return { error, loading, data,postData ,handleLogin};
}

export default usePost;
