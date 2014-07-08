//upon clicking enter
document.getElementById("entry").onsubmit = enter

var total = 0;

function enter() {

//var m = get number from input box
  var m = document.getElementById("newEntry").value;
  m = parseFloat(m);
  var currency = currencyFormat(m);

//display line item
  document.getElementById("entries").innerHTML += "<tr><td></td><td>" + currency + "</td></tr>";

//add to the total 
  total = m + total;

//display new total
  document.getElementById("total").innerHTML = currencyFormat(total);

  document.getElementById("newEntry").value = "";

  return false;

}

// show as currency
function currencyFormat(a) {
  var currency = parseFloat(a);
  currency = currency.toFixed(2);
  currency = "$" + currency;
  return currency;
}
