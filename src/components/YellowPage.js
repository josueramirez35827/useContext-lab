import React, { useContext } from "react";
import { ColorContext } from "../App";

const YellowPage = () => {

  const Context = useContext(ColorContext);
  console.log(Context);

  return (
    <div>
      <h1 style={{ color: 'green'}}>This is the YellowPage</h1>
    </div>
  )
}

export default YellowPage;