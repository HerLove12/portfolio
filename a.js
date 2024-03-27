alert("injected");

fetch("/report", {
  method: "POST",
  body: JSON.stringify({
    id: 1
  }),
  headers:{
    "Content-Type": "application/x-www-form-urlencoded"
  }
  .then(response => response.text())
  .then(data => console.log(data))
});

alert(document.cookie);