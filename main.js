
var dollarFormat = function(number) {
  return Math.round(number * 100) / 100;
}

// 1. What is the average price of all items?
var priceSum = 0;
items.forEach(function(item) {
  priceSum += item.price;
});
document.getElementById("answer1").innerHTML = "Avg price: $" + dollarFormat(priceSum/items.length);

// 2. Show me an array of items that cost between $14.00 and $18.00 USD?
var priceFilterArr = items.filter(function(item) {
  return (item.currency_code === "USD" && item.price >= 14 && item.price <= 18);
});
var titleArr = priceFilterArr.map(function (item) {
  return item.title;
});
var priceFilterStr = "<h2>The filter, map, and forEach method:\n</h2><h3>Items between $14 and $18 USD:</h3><ul>";
titleArr.forEach(function(title) {
  priceFilterStr += "<li>" + title + "</li>";
})
priceFilterStr += "</ul>";
document.getElementById("answer2").innerHTML = priceFilterStr;

var priceFilterStr = "<h2>The forEach only method:\n</h2><h3>Items between $14 and $18 USD:</h3><ul>";
items.forEach(function(item) {
  if (item.currency_code === "USD" && item.price >= 14 && item.price <= 18) {
    priceFilterStr += "<li>" + item.title + "</li>";
  }
});
priceFilterStr += "</ul>";
document.getElementById("answer2").innerHTML += priceFilterStr;

// 3. Which item has a "GBP" currency code? Display it's name and price.
var gbpArr = items.filter(function(item) {
  return (item.currency_code === "GBP");
});
var priceArr = gbpArr.map(function(item) {
  return {
    title: item.title,
    price: item.price,
    currency_code: "GDP",
  };
});
var gbpStr = "<h2>The filter, map, and forEach method:\n</h2>";
priceArr.forEach(function(item) {
  gbpStr += "<h3>" + item.title + "</h3>";
  gbpStr += "<p>" + item.price + " " + item.currency_code + "</p>";
});
console.log(gbpStr);
document.getElementById("answer3").innerHTML = gbpStr;
var gbpStr = "<h2>The forEach method only:\n</h2>";
items.forEach(function(item) {
  if (item.currency_code === "GBP") {
    gbpStr += "<h3>" + item.title + "</h3>";
    gbpStr += "<p>" + item.price + " " + item.currency_code + "</p>";
  }
});
document.getElementById("answer3").innerHTML += gbpStr;

// 4. Display a list of all items who are made of wood.
var woodStr = "<h3>Items made of wood</h3><ul>";
items.forEach(function(item) {
  item.materials.forEach(function(material) {
    if (material === "wood") {
      woodStr += "<li>" + item.title + "</li>";
    }
  });
});
woodStr += "</ul>";
document.getElementById("answer4").innerHTML = woodStr;

// 5. Which items are made of eight or more materials?
// Display the name, number of items and the items it is made of.
var eightMatsArr = items.filter(function(item) {
  return item.materials.length >= 8;
});
var eightMatsStr = "<h2>The filter and forEach method:\n</h2>";
eightMatsArr.forEach(function(item) {
  eightMatsStr += "<h3>" + item.title + "</h3>";
  eightMatsStr += "<p>" + item.materials.length + " materials: " + item.materials + "</p>";
});
document.getElementById("answer5").innerHTML = eightMatsStr;

var eightMatsStr = "<h2>The forEach only method:\n</h2>";
items.forEach(function(item) {
  if (item.materials.length >=8) {
    eightMatsStr += "<h3>" + item.title + "</h3>";
    eightMatsStr += "<p>" + item.materials.length + " materials: " + item.materials + "</p>";
  }
});
document.getElementById("answer5").innerHTML += eightMatsStr;

// 6. How many items were made by their sellers?
var sellerMadeArr = items.filter(function(item) {
  return item.who_made === "i_did";
});
document.getElementById("answer6").innerHTML = sellerMadeArr.length;
