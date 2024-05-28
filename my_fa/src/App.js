import React, { useEffect, useState } from 'react';
import Axios from "axios";

const App = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/getData");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data}
    </div>
  );
}

export default App;
