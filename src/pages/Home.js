import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

const Home = () => {
  const [input, setInput] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} value={input} />
    </MainPageLayout>
  );
};

export default Home;
