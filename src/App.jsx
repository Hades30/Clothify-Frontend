import React, { useState, useEffect, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./slider.css";
import ItemGrid from "./Slider";

function App() {
  const [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState("test");
  const [results, setResults] = useState();
  const [similarProducts, setSimilarProducts] = useState([]);

  const onClick = async () => {};

  const simulateUpload = useCallback(async () => {
    const [{ id: tabId }] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    chrome.scripting.executeScript(
      {
        target: { tabId },
        func: () => {
          const str = document.getElementsByClassName(
            "image-grid-imageContainer"
          )[0].childNodes[0].style.backgroundImage;
          console.log(str);
          const startIndex = str.indexOf('("') + 2; // +2 to skip over `("`

          // Find the end index of the URL
          const endIndex = str.indexOf('")');

          // Extract the URL using substrings
          const url = str.substring(startIndex, endIndex);
          console.log(url);

          return url;
        },
      },
      (results) => {
        console.log(results[0].result);
        setImageUrl(results[0].result);
      }
    );
  }, []);
  console.log(imageUrl);

  useEffect(() => {
    simulateUpload();
  }, [simulateUpload]);

  const hitServer = useCallback(async (imageUrl) => {
    const data = await fetch("https://clothify-backend-po2i.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: imageUrl,
      }),
    }).then((res) => res.json());
    console.log(data);
    setResults(data.result);
  }, []);

  // useEffect(() => {
  //   const url = document.getElementById("text-secret").textContent;
  //   setImageUrl(url);
  // }, []);

  useEffect(() => {
    if (imageUrl) hitServer(imageUrl);
  }, [hitServer, imageUrl]);

  return (
    <>
      <h1>Shopping Cart Slider</h1>
      <div id="text-secret"></div>
      {results ? <ItemGrid data={results} /> : "Loading"}
    </>
  );
}

export default App;
