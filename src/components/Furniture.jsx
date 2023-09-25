import { useState, useEffect } from "react";
import axios from "axios";
import FornitureItem from "./FornitureItem.jsx";
import Loading from "./Loading";

const Furniture = () => {
  const [loading, setLoading] = useState(true);
  const [forniture, setForniture] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDecoration = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/furniture"
        );
        if (response.status === 200) {
          setForniture(response.data.products);
          setError("");
        } else {
          setError("Failed, try again!");
        }
      } catch (error) {
        console.error("Error fetching forniture data:", error);
        setError("Error fetching forniture data");
      } finally {
        setLoading(false);
      }
    };
    fetchDecoration();
  }, []);
  return (
    <div>
      <h2 className="title">Luxury furniture</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <FornitureItem data={forniture} />
      )}
    </div>
  );
};

export default Furniture