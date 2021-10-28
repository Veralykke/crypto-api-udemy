//Old
/*const req = new XMLHttpRequest();

req.onload = function () {
  console.log("ALL DONE WITH REQUEST");
  const data = JSON.parse(this.responseText);
  console.log(data.ticker.price);
};

req.onerror = function () {
  console.log("ERROR");
  console.log(this);
};

req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
req.send();*/

//New
fetch("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log("RESPONSE, WAITING TO PARSE", res);
    return res.json();
  })
  .then((data) => {
    //console.log("DATA PARSED..", data);
    console.log("DATA PARSED..");
    console.log(data.ticker.price);
  })
  .catch((e) => {
    console.log("OH NO! oh lordi", e);
  });
