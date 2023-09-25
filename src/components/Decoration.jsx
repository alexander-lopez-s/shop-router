import { useState, useEffect } from "react";
import axios from "axios";
import DecorationItem from "./DecorationItem";
import Loading from "./Loading";

const Decoration = () => {
  const [loading, setLoading] = useState(true);
  const [decoration, setDecoration] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchDecoration = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/home-decoration"
        );
        if (response.status === 200) {
          setDecoration(response.data.products);
          setError("");
        } else {
          setError("Failed, try again!");
        }
      } catch (error) {
        console.error("Error fetching decoration data:", error);
        setError("Error fetching decoration data");
      } finally {
        setLoading(false);
      }
    };
    fetchDecoration();
  }, []);

  return (
    <div>
      <h2 className="title">Home decoration</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <DecorationItem data={decoration} />
      )}
    </div>
  );
};

export default Decoration;
