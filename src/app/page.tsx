// src/app/page.tsx (for App Router)

"use client"; // This makes the file a client component

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  const handleSync = async () => {
    try {
      const response = await axios.get(
        "https://overwatch.blizzard.com/en-us/news/patch-notes/"
      ); // replace with the Overwatch patch notes URL
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSync}>Sync Data</button>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}
