import { useState, useEffect } from "react";
import axios from "axios";
import LightningItem from "./LightningItem";
import Loading from "./Loading";


const Lightning = () => {
  const [loading, setLoading] = useState(true);
  const [lightning, setLightning] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchLightning = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/lighting"
        );
        if (response.status === 200) {
          setLightning(response.data.products);
          setError("");
        } else {
          setError("Failed, try again!");
        }
      } catch (error) {
        console.error("Error fetching lightning data:", error);
        setError("Error fetching lightning data");
      } finally {
        setLoading(false);
      }
    };
    fetchLightning();
  }, []);

  return (
    <div>
      <h2 className="title">Trendy lights</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <LightningItem data={lightning} />
      )}
    </div>
  );
};

export default Lightning;
