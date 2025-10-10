import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CardDesign2 from "../../Components/CardDesign/CardDesign2";
import { getInstallApps, removeData } from "../../Utilities/addAppsDB";
import Title from "../../Components/Headings/Title";
import { IoMdArrowDropdown } from "react-icons/io";

const InstallPage = () => {
  // data coming from Routes.jsx
  const data = useLoaderData();

  const [installList, setInstallList] = useState([]);

  /* short functionality start */
  const handleShortAppsData = (type) => {
    let sortedApps = [...installList];

    if (type === "toHigh") {
      // to Low
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    } else if (type === "toLow") {
      // to High 
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    }

    setInstallList(sortedApps); 
  };
  /* short functionality end */

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
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };
  /* ---- uninstall functionalities end */


  return (
    <div className="px-18">
      <div className="flex justify-center items-center text-center mt-10 mb-10">
        <Title
          heading={"Your Installed Apps"}
          title={"Explore All Trending Apps on the Market developed by us"}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6538BA] via-[#7A42E8] to-[#8854CE]">({installList.length}) Apps Found</h3>

        <div className="dropdown-sec">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1 bg-transparent border border-gray-400">
              Sort By Size <IoMdArrowDropdown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm"
            >
              <li onClick={() => handleShortAppsData("toLow")}>
                <a>High to low</a>
              </li>
              <li onClick={() => handleShortAppsData("toHigh")}>
                <a>Low to high</a>
              </li>
            </ul>
          </div>
        </div>
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
              onUninstall={() => handleClickInstall(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InstallPage;
