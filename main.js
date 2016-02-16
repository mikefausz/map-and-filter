
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
var priceFilter = [];
items.forEach(function(item) {
  if (item.currency_code === "USD" && item.price >= 14 && item.price <= 18) {
    priceFilter.push("\n" + item.title);
  }
});
document.getElementById("answer2").innerHTML = "Items between $14 and $18 USD:" + priceFilter;

// 3. Which item has a "GBP" currency code? Display it's name and price.
var gbpStr = "";
items.forEach(function(item) {
  if(item.currency_code === "GBP") {
    gbpStr += "<h3>" + item.title + "</h3>";
    gbpStr += "<p>" + item.price + " " + item.currency_code + "</p>";
  }
});
document.getElementById("answer3").innerHTML = gbpStr;

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
var eightMatsStr = "";
items.forEach(function(item) {
  if (item.materials.length >=8) {
    eightMatsStr += "<h3>" + item.title + "</h3>";
    eightMatsStr += "<p>" + item.materials.length + " materials: " + item.materials + "</p>";
  }
});
document.getElementById("answer5").innerHTML = eightMatsStr;

// 6. How many items were made by their sellers?
var sellerMadeArr = items.filter(function(item) {
  return item.who_made === "i_did";
});
document.getElementById("answer6").innerHTML = sellerMadeArr.length;
