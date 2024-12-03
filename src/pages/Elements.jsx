import { useLoaderData } from "react-router-dom";
import ElementCard from "../components/ElementCard";
import { useState } from "react";

function Elements() {
  const data = useLoaderData();
  const [elements, setElements] = useState(data);

  function handleDeleteSuccess(id) {
    setElements((prev) => prev.filter((el) => el._id !== id));
  }

  return (
    <div>
      <div className="grid grid-col-1 md:grid-cols-2 p-28">
        {elements &&
          elements?.map((el) => (
            <ElementCard
              key={el._id}
              element={el}
              onDeletetion={handleDeleteSuccess}
            />
          ))}
      </div>
    </div>
  );
}

export default Elements;
