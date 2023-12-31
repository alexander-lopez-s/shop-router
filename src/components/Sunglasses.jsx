import { useState, useEffect } from "react";
import axios from "axios";
import SunglassesItem from "./SunglassesItem";
import Loading from "./Loading";


const Lightning = () => {
  const [loading, setLoading] = useState(true);
  const [sunglasses, setSunglasses] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchSunglasses = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/sunglasses"
        );
        if (response.status === 200) {
          setSunglasses(response.data.products);
          setError("");
        } else {
          setError("Failed, try again!");
        }
      } catch (error) {
        console.error("Error fetching sunglasses data:", error);
        setError("Error fetching sunglasses data");
      } finally {
        setLoading(false);
      }
    };
    fetchSunglasses();
  }, []);

  return (
    <div>
      <h2 className="title">Neuwest sunglasses</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <SunglassesItem data={sunglasses} />
      )}
    </div>
  );
};

export default Lightning;
