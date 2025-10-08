import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CardDesign2 from "../../Components/CardDesign/CardDesign2";
import { getInstallApps, removeData } from "../../Utilities/addAppsDB";
import Title from "../../Components/Headings/Title";

const InstallPage = () => {
  // data coming from Routes.jsx
  const data = useLoaderData();
  

  const [installList, setInstallList] = useState([]);

  useEffect(() => {
    const installedApps = getInstallApps();

    const filterApps = data.filter((item) => {
      return installedApps.includes(item.id);
    });

    setInstallList(filterApps);
  }, [data]);

  /* ---- uninstall functionalities start */
  const handleClickInstall = (id) => {
    removeData(id);

    setInstallList((prev) => {
      return(
        prev.filter((item) => {
          return(
            item.id !== id
          )
        })
      )
    })
  }
  /* ---- uninstall functionalities end */

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
        <div>
          {installList.map((item) => (
            <CardDesign2
              key={item.id}
              image={item.image}
              title={item.title}
              downloads={item.downloads}
              ratingAvg={item.ratingAvg}
              size={item.size}
              onUninstall={() => handleClickInstall(item.id)} // 👈 added prop
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InstallPage;
