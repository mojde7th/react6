import React, { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = { name: "Mojde", token: "ddkmdkkjnjanjhdbhjB" };
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((data) => 
        data.json()
      )
      .then((js) => {
        setLoading(false);
        setData(js);
        console.log(js);
      })
      .catch((er) => {
        console.log("er:", er);
      })
      .finally(() => {
        console.log("finaaaally");
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-3">

      {loading && "Loading......."}
      {data.map((item) => {
        return (
          <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">{item.price}</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
