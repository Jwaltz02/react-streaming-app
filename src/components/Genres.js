import React, { useState } from "react";
import "../styles/Genres.css";
import { IoMdHeart } from "react-icons/io";

function Genres({ imageData }) {
  return (
    <>
      <div id="thumbnailHeart" className="arrows-thumbnail-photos">
        <div className="thumbnail-photos-wrapper">
          {imageData.map((x, index) => {
            return (
              <div
                key={index}
                className="thumbnails"
                style={{ backgroundImage: `url(${x})` }}>
                <IoMdHeart className="text-white opacity-40 w-12 h-12 float-right mr-3 mt-3 hover:text-red-600 hover:opacity-100 cursor-pointer" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Genres;
