import React from "react";
import EditFunctions from "./EditFunctions";

function Mapping(props) {
  const mappedItem = props.products.map((e, i) => {
    return (
      <div key={i}>
        <ul className="productItem">
          <li>{e.name}</li>
          <li>{e.description}</li>
          <li>${e.price}</li>
          <li>{e.image_url}</li>
        </ul>
        <EditFunctions
          products={props.products}
          index={i}
          delete={props.delete}
          update={props.update}
          create={props.create}
        />
      </div>
    );
  });
  return mappedItem;
}

export default Mapping;
