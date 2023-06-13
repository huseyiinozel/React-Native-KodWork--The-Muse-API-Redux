import { useEffect, useState } from "react";
import axios from 'axios';

function useUser() {
  const [datas, setData] = useState([]);
  const [loadings, setLoading] = useState(true);
  const [errors, setError] = useState(null);

  const fetchUser = async () => {
    try {
      

      const { data: responseData } = await axios.get("https://fakestoreapi.com/users");
      setData(responseData);
      setLoading(false);
      console.log(responseData)
      
      
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchUser();
    console.log(datas)
    
  }, []);

  return { errors, loadings, datas };
}

export default useUser;