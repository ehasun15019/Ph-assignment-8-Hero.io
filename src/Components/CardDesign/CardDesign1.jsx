import React from "react";
import { assets } from "../../assets/assets";


const CardDesign1 = ({image, title, downloads, ratingAvg}) => {
  return (
    <div>
      <div className="card bg-base-100 w-70 shadow-sm p-4">
        <figure className="py-12 px-5 bg-gray-100 rounded-b rounded-t">
          <img
            src={image}
            alt={title}
            className="w-20"
          />
        </figure>
        <div className="card-bodies my-3">
          <h2 className="card-title py-2">{title}</h2>
    
          <div className="card-actions flex justify-between">
            <button className="bg-[#F1F5E8] border-0 flex px-3 py-2 items-center gap-2">
                <img src={assets.download} alt="download image" className="w-5" />
                {downloads}
            </button>

            <button className="bg-[#FFF0E1] border-0 flex px-3 py-2 items-center gap-2">
               <img src={assets.star} alt="star image"  className="w-5"/>
                {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDesign1;
