'use strict';
console.log('hello js');

// for loop to insert iside the array the working hours 
var workHour = [];
for (var i = 6; i < 12; i++) {
  workHour.push(i + 'am');
}
workHour.push(12 + 'pm')
for (var j = 1; j < 7; j++) {
  workHour.push(j + 'pm');
}
console.log(workHour);


// add a random number 
var randomCust = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

////////constructor function for all branches 
function Branch(name, minCustPerHour, maxCustPerHour,
  avgCookiePerHour, avgCustPerHour, avgCookiePurchased, totalCookie) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerHour = avgCookiePerHour;

  this.totalCookie = totalCookie;
}

//////calculateCustPerHour  function
Branch.prototype.calculateCustPerHour = function () {

  for (var i = 0; i < workHour.length; i++) {
    console.log(this.name);
    this.avgCustPerHour.push(randomCust(this.minCustPerHour, this.maxCustPerHour));
  }
}

///////calculateCookiePerHour function 
Branch.prototype.calculateCookiePerHour = function () {
  for (var i = 0; i < workHour.length; i++) {
    this.avgCookiePurchased.push(Math.floor(this.avgCustPerHour[i] * this.avgCookiesPerHour));

    this.totalCookie = this.totalCookie + this.avgCookiePurchased[i];
    console.log('total', this.totalCookie);
  }
}
//////  renderRow function

Branch.prototype.renderRow = function () {

  // Create and append section 
  var parentDiv = document.getElementById('cookieProfile');
  var locationSec = document.createElement('section');
  parentDiv.appendChild(locationSec);

  // Create and append h3 for name !!
  var locationName = document.createElement('h3');
  locationSec.appendChild(locationName);
  locationName.textContent = 'Name : ' + this.name;

  //create and append the table 
  var tableBranch = document.createElement('table');
  locationSec.appendChild(tableBranch);

  // create and append seattle row for the table 
  var seattleRow = document.createElement('tr');
  tableBranch.appendChild(seattleRow);

  // create and append Tokyo row for the table 
  var tokyoRow = document.createElement('tr');
  tableBranch.appendChild(tokyoRow);

  // create and append Dubai row for the table 
  var dubaiRow = document.createElement('tr');
  tableBranch.appendChild(dubaiRow);

  // create and append Paris row for the table 
  var parisRow = document.createElement('tr');
  tableBranch.appendChild(parisRow);

  // create and append Lima row for the table 
  var limaRow = document.createElement('tr');
  tableBranch.appendChild(limaRow);

  // create and append Total row for the table 
  var totalRow = document.createElement('tr');
  tableBranch.appendChild(totalRow);

  var locationList = document.createElement('ul');
  locationSec.appendChild(locationList);

  // for loop to add each working hour and avgCookiePerHour with list 
  for (var i = 0; i < this.avgCookiePurchased.length; i++) {

    var listItem = document.createElement('li');
    locationList.appendChild(listItem);
    listItem.textContent = workHour[i] + ':' + this.avgCookiePurchased[i] + 'Cookies';
  }
  listItem.textContent = 'Total :' + this.totalCookie;

};

//////  create and append  header  function
Branch.prototype.renderHeader = function () {
  for (i = 0; i < workHour.length; i++) {
    var tableHeader = document.createElement('th');
    tableBranch.appendChild(tableHeader);
    tableHeader.textContent = workHour[i]
  }
  tableHeader.textContent = 'Daily Location Total';

};

//////  create and append footer function
Branch.prototype.renderFooter = function () {
for(i=0 ; i < workHour.length ; i++)


}



////// create objects for the Branch Constructor

//// Seattle
var seattle = new Branch('Seattle', 23, 65, 6.3);
seattle.calculateCustPerHour();
seattle.calculateCookiePerHour();
seattle.renderRow();
console.log(seattle);

////Tokyo
var tokyo = new Branch('Tokyo', 3, 24, 1.2);
tokyo.calculateCustPerHour();
tokyo.calculateCookiePerHour();
tokyo.renderRow();
console.log(tokyo);

//// Dubai 
var dubai = new Branch('Dubai', 11, 38, 3.7);
dubai.calculateCustPerHour();
dubai.calculateCookiePerHour();
dubai.renderRow();
console.log(dubai);

//// Paris
var paris = new Branch('Paris', 20, 38, 2.3);
paris.calculateCustPerHour();
paris.calculateCookiePerHour();
paris.renderRow();
console.log(paris);

////Lima
var lima = new Branch('Lima', 2, 16, 4.6);
lima.calculateCustPerHour();
lima.calculateCookiePerHour();
lima.renderRow();
console.log(lima);

// };
// seattel.calculateCustPerHour();
// seattel.calculateCookiePerHour();
// console.log(seattel.avgCookiePurchased);

// console.log(seattel.calculateCookiePerHour);
// seattel.render();

////////////////////////////////////////
// 

// tokyo.calculateCustPerHour();
// tokyo.calculateCookiePerHour();
// console.log(tokyo.avgCookiePurchased);

// console.log(tokyo.calculateCookiePerHour);
// tokyo.render();

////////////////////////////////////////
//
// dubai.calculateCustPerHour();
// dubai.calculateCookiePerHour();
// console.log(dubai.avgCookiePurchased);

// console.log(dubai.calculateCookiePerHour);
// dubai.render();

////////////////////////////////////
//  
// Paris.calculateCustPerHour();
// Paris.calculateCookiePerHour();
// console.log(Paris.avgCookiePurchased);

// console.log(Paris.calculateCookiePerHour);
// Paris.render();
//////////////////////////////////////////////////////

//  
// lima.calculateCustPerHour();
// lima.calculateCookiePerHour();
// console.log(lima.avgCookiePurchased);

// console.log(lima.calculateCookiePerHour);
// lima.render();