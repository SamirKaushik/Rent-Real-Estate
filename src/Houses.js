import Property from "./Property.js";
import React from "react";
const Houses = ({ data }) => {
  return (<div className="houses">
    {data.map(
      (item) => <Property data={item} />
    )
    }
  </div>);
}
export default Houses;