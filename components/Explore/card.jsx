import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const Card = ({ providers }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {providers.map((item, index) => (
        <div
          key={item.title}
          className="bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl w-full flex flex-col justify-center p-4"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            transition: "height 0.3s ease-in-out",
          }}
        >
          <div className="font-bold text-xl text-center">{item.title}</div>

          <div
            className={`overflow-hidden text-ellipsis mt-2 transition-all ${
              expandedIndex === index ? "max-h-[300px]" : "max-h-12"
            }`}
          >
            {item.description}
            {expandedIndex !== index && item.description.length > 100 && (
              <span className="text-gray-500">...</span>
            )}
          </div>
          {item.description.length > 100 && (
            <button
              onClick={() => handleExpandToggle(index)}
              className="mt-2 text-blue-500 hover:underline cursor-pointing"
            >
              {expandedIndex === index ? "Read Less" : "Read More"}
            </button>
          )}

          <div className="mt-2 text-center">
            {item.website && (
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline cursor-pointing"
              >
                Visit Website
              </a>
            )}
          </div>
          <div className="mt-2 flex flex-col items-center">
            <Rating
              name="read-only"
              value={item.rating}
              precision={0.1}
              readOnly
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
