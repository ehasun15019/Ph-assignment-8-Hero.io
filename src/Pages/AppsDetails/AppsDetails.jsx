import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { assets } from "../../assets/assets";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer} from "recharts";
import { addToAppsDB, getInstallApps } from "../../Utilities/addAppsDB";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AppsDetails = () => {
  // this id coming from Routes.jsx and this is for single routes link
  const { id } = useParams();

  // id convert in integer number
  const appsId = parseInt(id);

  // taking all data from public folder
  const appData = useLoaderData();

  // use Find() for creating a Single Apps Format
  const singleApp = appData.find((app) => {
    return app.id === appsId;
  });

   
    /* installed functionalities start */
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
      const installedApps = getInstallApps();

      if (installedApps.includes(appsId)) {
        setIsInstalled(true);
      }

    }, [appsId])

    const handleClickInstall = (id) => {
      addToAppsDB(id);
      setIsInstalled(true);
      toast.success("✅ App installed successfully!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
    /* installed functionalities end */

     // if app details not found 
    if (!singleApp) {
        return (
            <div className="text-center py-20 text-xl px-10">
                <div className="flex flex-col justify-center items-center">
                  <img src={assets.appsError} alt="error image" className="w-[150px] md:w-[200px] lg:w-[250px] mb-3"/>
                  <h3 className="text-2xl md:text-3xl font-bold">OPPS!! APP NOT FOUND</h3>
                  <p className="text-[0.9rem] py-1 pb-3">The App you are requesting is not found on our system.  please try another apps</p>
                  <Link to="/apps" className="bg-gradient-to-br from-[#6538BA] via-[#7A42E8] to-[#8854CE] px-5 py-2 text-white rounded">Go Back</Link>
                </div>
            </div>
        );
    }


  const {image,title,companyName,downloads,ratingAvg,reviews,description,description2,description3,ratings, size} = singleApp;
   

  return (
    <div className="py-10 px-10 md:px-15 lg:px-20">
      <section className="flex items-center flex-col lg:flex-row gap-8 ">
        {/* Apps image */}
        <div className="image-section">
          <img
            src={image}
            alt={title}
            className="max-w-[300px] h-[120px] md:h-[150px] lg:h-[280px] object-contain drop-shadow-lg rounded bg-white py-6 px-6"
          />
        </div>

        <div className="app-details-section w-full">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            <p className="pt-2">
              Developed by
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#6538BA] via-[#7A42E8] to-[#8854CE] font-semibold mb-4">
                {companyName}
              </span>
            </p>
          </div>

          <div className="divider"></div>

          <div className="earnings-rate-section">
            <div className="flex gap-4 md:gap-10 mb-4 flex-wrap">
              <div className="flex flex-col">
                <img
                  src={assets.download}
                  alt="download"
                  className="w-[25px]"
                />
                <p>Downloads</p>
                <h3 className="text-[1.1rem] md:text-[1.5rem] font-bold">
                  {downloads} M
                </h3>
              </div>

              <div className="flex flex-col">
                <img src={assets.star} alt="download" className="w-[25px]" />
                <p>Average Ratings</p>
                <h3 className="text-[1.1rem] md:text-[1.5rem] font-bold">
                  {ratingAvg}
                </h3>
              </div>

              <div className="flex flex-col">
                <img src={assets.review} alt="download" className="w-[25px]" />
                <p>Total Reviews</p>
                <h3 className="text-[1.1rem] md:text-[1.5rem] font-bold">
                  {reviews}
                </h3>
              </div>
            </div>

            <button
                onClick={() => handleClickInstall(id)}
                disabled={isInstalled}
                className={`px-4 py-2 rounded font-semibold text-white transition-all ${
                  isInstalled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#00D390] hover:bg-[#05b57e]"
                }`}
              >
                {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </section>

      <div className="rating-chart-section w-full mb-20">
        <div className="h-80 mt-6 w-full">
          <h2 className="text-lg font-semibold mb-3">Ratings</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={ratings}
              margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis type="number" domain={[0, "dataMax + 1000"]} />
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                width={80}
              />
              <Tooltip
                cursor={{ fill: "rgba(255,165,0,0.1)" }}
                formatter={(value) => [`${value.toLocaleString()}`, "Reviews"]}
              />
              <Bar
                dataKey="count"
                fill="#ff9500"
                radius={[0, 10, 10, 0]}
                barSize={25}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <section className="description w-full">
        <div className="divider"></div>
        <h4 className="text-2xl md:text-3xl font-semibold">Description</h4>
        <p className="mt-4 text-gray-600">{description}</p>
        <p className="mt-4 text-gray-600">{description2}</p>
        <p className="mt-4 text-gray-600">{description3}</p>
      </section>

      <ToastContainer />
    </div>
  );
};

export default AppsDetails;
