import React, { useState } from "react";

export default function CardL({ article }) {
  // ici on rend une carte de location
  return (
    <div
      className="m-4 p-4 w-3xs rounded-2xl flex-shrink-0 bg-white shadow-sm cursor-pointer"
      key={article.id}
    >
      <img
        className="object-cover w-full h-40 rounded-md"
        src={article.image}
        alt={article.title}
      />
      <h3 className="font-semibold">{article.title}</h3>
      <p className="font-light">{article.location}</p>
      <span className="text-red-500 font-semibold">
        {article.price} € / nuit
      </span>
    </div>
  );
}
