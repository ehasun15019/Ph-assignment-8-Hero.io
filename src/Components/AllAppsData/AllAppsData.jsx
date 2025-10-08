import React, { useEffect, useState } from 'react'
import CardDesign1 from '../CardDesign/CardDesign1';

const AllAppsData = () => {

  const [showAllData, setShowAllData] = useState([]);
  const [animatedLoading, setAnimatedLoading] = useState(true);

  useEffect(() => {
    fetch("/appData.json")
    .then((res) => res.json())
    .then((result) => {
        setShowAllData(result);
        setAnimatedLoading(false)
    })
    .catch((error) => {
        console.log("data is fetching", error);
        setAnimatedLoading(false)
    })
  }, [])

 if(animatedLoading) {
    return (
        <div className="text-center py-10">
            <span className="loading loading-spinner text-primary scale-150"></span>
        </div>
    )
  }

  return (
    <div>
        <div className="showData grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-12 justify-items-center px-6">
            {
                showAllData.map((item) => {
                    return(
                        <CardDesign1 
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            downloads={item.downloads}
                            ratingAvg={item.ratingAvg}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default AllAppsData