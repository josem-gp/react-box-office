import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Show = () => {
  const { id } = useParams();

  return <div>This is show page</div>;
};

export default Show;
