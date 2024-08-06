// content.js
function getImageUrls() {
  const str = document.getElementsByClassName("image-grid-imageContainer")[0]
    .childNodes[0].style.backgroundImage;
  console.log(str);
  const startIndex = str.indexOf('("') + 2; // +2 to skip over `("`

  // Find the end index of the URL
  const endIndex = str.indexOf('")');

  // Extract the URL using substrings
  const url = str.substring(startIndex, endIndex);
  console.log(url);

  return url;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  if (request.action === "getImageUrls") {
    console.log("getImageUrls");
    const imageUrl = getImageUrls();
    sendResponse({ imageUrl });
  }
});
