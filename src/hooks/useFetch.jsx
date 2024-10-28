import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      setLoading(false);
      setData(res.data);
      setError(null);
    } catch (error) {
      setLoading(false);
      setData([]);
      setError(error.message);
    }
  };
  useEffect(() => {
    getData(url);
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
