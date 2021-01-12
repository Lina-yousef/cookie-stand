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
function Branch(name, minCustPerHour, maxCustPerHour, avgCookiePerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerHour = avgCookiePerHour;
  this.avgCustPerHour = [];
  this.avgCookiePurchased = [];

  this.renderRow = [];

  this.totalCookie = 0;
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

//////  constructor the table as a function 
var tableDiv;
var locationTable;

function createTable() {
var tableDiv = document.getElementById('tableBranch');
var locationTable = document.createElement('table');///////////////
tableDiv.appendChild(locationTable);
}
createTable();
createHeader();

//////  create and append  header  function
function createHeader() {
 
  /// create row
  var headerRow = document.createElement('tr'); /////
  locationTable.appendChild(headerRow);

  /// create cells
  var emptyHeader = document.createElement('th');////
  headerRow.appendChild(emptyHeader);
  //emptyHeader.textContent = 'emptycell';

  var hoursHeader ;
  for (i = 0; i < workHour.length; i++) {

    hoursHeader = document.createElement('th');////
    tableRow.appendChild(hoursHeader);
    headerRow.textContent = workHour[i]
  }
  var dailyTotal =document.createElement('th');
  headerRow.appendChild(dailyTotal);
  dailyTotal.textContent = 'Daily Location Total';/////
}

 render();

  Branch.prototype.render= function () {

    var locationRow = document.createElement('tr');//////
    locationTable.appendChild(locationRow);

    var nameCell = document.createElement('td');
    locationRow.appendChild(nameCell);
    nameCell.textContent = this.name;

    var dataCell;
    for (i = 0; i < this.calculateCookiePerHour.length; i++) {
      dataCell = document.createElement('td');///////
      dataCell.textContent = this.calculateCookiePerHour[i];
      locationRow.appendChild(dataCell);
    }
    var totalCell = document.createElement('td');//////////
    locationRow.appendChild = (totalCell);
    totalCell.textContent = this.totalCookie;
  }

  createFooter();

  /////// create footer function 
function  createFooter () {
    // create and append Total row for the table 
    var totalRow = document.createElement('tr');
    tableBranch.appendChild(totalRow);
    totalRow.textContent='Totals';

    var columnTotal=[];
    for(i=0 ; i< workHour.length ;i++){
       columnTotal=document.createElement('td');
       totalRow.appendChild=(columnTotal);
       columnTotal.textContent=this.calculateCookiePerHour;
    }
  }


////// create objects for the Branch Constructor

//// Seattle
var seattle = new Branch('Seattle', 23, 65, 6.3);
seattle.calculateCustPerHour();
seattle.calculateCookiePerHour();
seattle.render();
console.log(seattle);

////Tokyo
var tokyo = new Branch('Tokyo', 3, 24, 1.2);
tokyo.calculateCustPerHour();
tokyo.calculateCookiePerHour();
tokyo.render();
console.log(tokyo);

//// Dubai 
var dubai = new Branch('Dubai', 11, 38, 3.7);
dubai.calculateCustPerHour();
dubai.calculateCookiePerHour();
dubai.render();
console.log(dubai);

//// Paris
var paris = new Branch('Paris', 20, 38, 2.3);
paris.calculateCustPerHour();
paris.calculateCookiePerHour();
paris.render();
console.log(paris);

////Lima
var lima = new Branch('Lima', 2, 16, 4.6);
lima.calculateCustPerHour();
lima.calculateCookiePerHour();
lima.render();
console.log(lima);