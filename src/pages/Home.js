import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

const Home = () => {
  const [input, setInput] = useState("");

  const onInputChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };

  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} />
    </MainPageLayout>
  );
};

export default Home;
