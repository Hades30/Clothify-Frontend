// src/ItemGrid.js
import React from "react";
import ItemCard from "./ItemCard";

const items = [
  {
    id: 1,
    name: "Item 1",
    price: "19.99",
    source: "Description 1",
    link: "#1",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Item 2",
    price: "29.99",
    description: "Description 2",
    link: "#2",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Item 3",
    price: "39.99",
    description: "Description 3",
    link: "#3",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Item 4",
    price: "49.99",
    description: "Description 4",
    link: "#4",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    name: "Item 5",
    price: "59.99",
    description: "Description 5",
    link: "#5",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    name: "Item 6",
    price: "69.99",
    source: "Description 6",
    link: "#6",
    image: "https://via.placeholder.com/300",
  },
];

const ItemGrid = ({ data }) => {
  return (
    <div>
      {data?.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemGrid;
