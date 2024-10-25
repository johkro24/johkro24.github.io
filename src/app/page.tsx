// src/app/page.tsx

"use client"; // Add this line to mark the component as a client component

import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://overwatch.blizzard.com/en-us/news/patch-notes/"
      ); // Replace with your API URL
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  return (
    <div>
      <h1>Overwatch 2 Counters</h1>
      <button onClick={fetchData}>Sync Data</button>
      {data && <div>{JSON.stringify(data)}</div>} {/* Display data */}
    </div>
  );
};

export default Home;
