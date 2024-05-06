import React, { useState } from "react";
import { RingLoader } from "react-spinners/";

function Loader() {
  let [IsLoading] = useState(true);

  return (
    <div style={{ marginTop: "400px position: center" }}>
      <div className="sweet-loading text-center">
        <RingLoader color="#000" loading={IsLoading} size={150} />
      </div>
    </div>
  );
}

export default Loader;
