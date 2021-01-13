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
var locationsArr = [];


////////constructor function for all branches 
function Branch(name, minCustPerHour, maxCustPerHour, avgCookiePerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerHour = avgCookiePerHour;

  this.avgCustPerHour = [];
  this.avgCookiePurchased = [];

  locationsArr.push(this)
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
    this.avgCookiePurchased.push(Math.floor(this.avgCustPerHour[i] * this.avgCookiePerHour));
  }

}


//////  constructor the table as a function 
var tableDiv;
var locationTable;

function createTable() {
  tableDiv = document.getElementById('tableBranch');
  locationTable = document.createElement('table');///////////////
  tableDiv.appendChild(locationTable);
}

//////  create and append  header  function
function createHeader() {

  /// create row
  var headerRow = document.createElement('tr'); /////
  locationTable.appendChild(headerRow);
  console.log('table', locationTable);  /// create cells
  var emptyHeader = document.createElement('th');////
  headerRow.appendChild(emptyHeader);
  emptyHeader.textContent = '    ';


  for (var i = 0; i < workHour.length; i++) {
    console.log(workHour[i]);
    var hoursHeader = document.createElement('th');////

    hoursHeader.textContent = workHour[i];
    headerRow.appendChild(hoursHeader);
  }
  var dailyTotal = document.createElement('th');
  headerRow.appendChild(dailyTotal);
  dailyTotal.textContent = 'Daily Location Total';/////
}
createTable();
createHeader();


Branch.prototype.render = function () {

  var locationRow = document.createElement('tr');//////
  locationTable.appendChild(locationRow);

  var nameCell = document.createElement('td');/////
  locationRow.appendChild(nameCell);
  nameCell.textContent = this.name;


  var locationTotal = 0;
  for (var i = 0; i < this.avgCookiePurchased.length; i++) {
    var dataCell = document.createElement('td');///////
    dataCell.textContent = this.avgCookiePurchased[i];
    locationRow.appendChild(dataCell);
    locationTotal = locationTotal + this.avgCookiePurchased[i];

  }
  var totalCell = document.createElement('td');//////////
  locationRow.appendChild(totalCell);
  totalCell.textContent = locationTotal;
}

// createFooter();

// /////// create footer function 
// function createFooter() {
//   // create and append Total row for the table 
//   var totalRow = document.createElement('tr');
//   tableBranch.appendChild(totalRow);
//   totalRow.textContent = 'Totals';

//   var columnTotal = [];
//   for (i = 0; i < workHour.length; i++) {
//     columnTotal = document.createElement('td');
//     totalRow.appendChild = (columnTotal);

//     columnTotal.textContent = calculateCookiePerHour[i];
//   }
// }


////// create objects for the Branch Constructor

//// Seattle
var seattle = new Branch('Seattle', 23, 65, 6.3);
seattle.calculateCustPerHour();
seattle.calculateCookiePerHour();
//attle.render();
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

console.log('LocationsArr' + locationsArr);


 /////// create footer function 
createFooter();
 function createFooter() {
     // create and append Total row for the table 

   var footerRow = document.createElement('tr');///////
   locationTable.appendChild(footerRow); 
  
   ///create cells 
  var totalCell = document.createElement('th');/////
  footerRow.appendChild(totalCell);
  totalCell.textContent = 'Total';

var arr = [];
var totalOfTotalCounter = 0;
console.log(locationsArr[0].avgCookiePurchased)
for (var i = 0; i < workHour.length; i++) {
  var avr = 0;
  for (var z = 0; z < locationsArr.length; z++) {
    var totalHour =document.createElement('th');
    
    avr = avr + locationsArr[z].avgCookiePurchased[i];
    totalOfTotalCounter += avr;
  }
  arr.push(avr);
  footerRow.appendChild(totalHour);
  totalHour.textContent=arr[i];
}

  var totalOfTotal = document.createElement('th');
  footerRow.appendChild(totalOfTotal);
  totalOfTotal.textContent=totalOfTotalCounter;

console.log(totalCell);
console.log(arr);
 }


 //// Form event

//  var locationForm =document.getElementById('locationForm');

 locationForm = addEventListener('submit' , submitter);

 function submitter(event) {
  event.preventDefault();

  var newName=event.target.nameField.value;
  var newMin = event.target.minField.value;
  var newMax=event.target.maxField.value;
  var newAvg=event.target.avgField.value;

  var newLocation =new Branch (newName ,newMin , newMax ,newAvg);

  console.log(event);

 }


