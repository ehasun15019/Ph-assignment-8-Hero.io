import React, { useEffect, useState } from "react";
import CardDesign1 from "../CardDesign/CardDesign1";

const Trading = () => {
  const [data, setData] = useState([]);
  const [loadings, setLoadings] = useState(true);

  useEffect(() => {
    fetch("/appData.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoadings(false);
      })
      .catch((error) => {
        console.error("data loaded:", error);
        setLoadings(false);
      });
  }, []);

  if (loadings) {
    return (
      <div className="text-center py-10">
        <span className="loading loading-spinner text-primary scale-150"></span>
      </div>
    );
  }

  return (
    <div className="my-10 md:my-16 lg:my-20 px-5 md:px-10 lg:px-20">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Trending Apps
        </h2>
        <p className="pt-3 text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="cards-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 justify-items-center">
        {data.slice(0, 8).map((item) => (
          <CardDesign1
            key={item.id}
            image={item.image}
            title={item.title}
            downloads={item.downloads}
            ratingAvg={item.ratingAvg}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center items-center">
        <button className="btn rounded-lg bg-gradient-to-br from-[#6538BA] via-[#7A42E8] to-[#8854CE] px-6">
            <span className="font-semibold text-white">Show All</span>
        </button>
      </div>
    </div>
  );
};

export default Trading;
