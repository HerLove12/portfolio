alert("injected");

fetch("/report", {
  method: "POST",
  body: JSON.stringify({
    id: 1
  }),
  headers:{
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

alert(document.cookie);