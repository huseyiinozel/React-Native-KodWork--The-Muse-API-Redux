import { useEffect, useState } from "react";
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  const fetchData = async () => {
    try {
      if (page >= 4) {
        return; 
      }

      const { data: responseData } = await axios.get(url + page);
      setData(prevData => [...prevData, responseData]);
      setLoading(false);
      setPage(page + 1);
      
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchData();
    
  }, [page]);

  return { error, loading, data };
}

export default useFetch;
