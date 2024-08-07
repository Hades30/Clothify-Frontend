// src/ItemCard.js
import React from "react";

function ItemCard({ item }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "16px",
        paddingTop: "0px",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          width: "350px",
          textAlign: "center",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        {" "}
        <a href={item.url} style={{ color: "black" }} target="_blank">
          <div
            style={{
              width: "100%",
              paddingTop: "100%",
              backgroundImage: `url(${item.imageUrl})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </a>
        <div style={{ padding: "16px" }}>
          <h2 style={{ fontSize: "18px", color: "#8c8c8c", margin: "8px 0" }}>
            {item.source}
          </h2>
          <p style={{ fontSize: "16px", color: "#333", margin: "8px 0" }}>
            {item.name}
          </p>

          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "black",
              margin: "8px 0",
            }}
          >
            {item.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
