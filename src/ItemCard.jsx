// src/ItemCard.js
import React from "react";
import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <a href={item.url}>
        <img src={item.imageUrl} alt={item.name} className="item-image" />
        <div className="item-details">
          <h2 className="item-name" style={{ fontWeight: "600" }}>
            {item.source}
          </h2>
          <h2 className="item-name">{item.name}</h2>
          <p className="item-price">{item.price}</p>
        </div>
      </a>
    </div>
  );
}

export default ItemCard;
