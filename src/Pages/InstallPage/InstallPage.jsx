import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CardDesign2 from "../../Components/CardDesign/CardDesign2";
import { getInstallApps } from "../../Utilities/addAppsDB";
import Title from "../../Components/Headings/Title";

const InstallPage = () => {
  // data coming from Routes.jsx
  const data = useLoaderData();
  console.log(data);

  const [installList, setInstallList] = useState([]);

  useEffect(() => {
    const installedApps = getInstallApps();

    const filterApps = data.filter((item) => {
      return installedApps.includes(item.id.toString());
    });

    setInstallList(filterApps);
  }, [data]);

  return (
    <div className="px-18">
        <div className="flex justify-center items-center text-center mt-10 mb-10">
            <Title heading={"Your Installed Apps"} title={"Explore All Trending Apps on the Market developed by us"} /> 
        </div>


      {installList.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          No apps installed yet 😢
        </p>
      ) : (
        <div className="">
          {installList.map((item) => (
            <CardDesign2
              key={item.id}
              image={item.image}
              title={item.title}
              downloads={item.downloads}
              ratingAvg={item.ratingAvg}
              size={item.size}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InstallPage;
