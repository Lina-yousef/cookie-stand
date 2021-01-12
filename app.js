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





//////  constructor method to render table 
var tableBranch = document.getElementById('tableBranch');

function renderRow() {

  Branch.prototype.renderRow = function () {

    var locationRow = document.createElement('tr');
    tableBranch.appendChild(locationRow);

    var shopName = document.createElement('th');
    locationRow.appendChild(shopName);
    shopName.textContent=this.locations;



    var nameCell = document.createElement('td');
    locationRow.appendChild(nameCell);
    nameCell.textContent = this.name;

    var dataCell;
    for (i = 0; i < this.calculateCookiePerHour.length; i++) {
      dataCell = document.createElement('td');
      dataCell.textContent = this.calculateCookiePerHour[i];
      tableBranch.appendChild(dataCell);
    }
    var totalCell = document.createElement('td');
    locationRow.appendChild = (totalCell);
    totalCell.textContent = this.totalCookie;
  }

  // // create and append Tokyo row for the table 
  // var tokyoRow = document.createElement('tr');
  // tableBranch.appendChild(tokyoRow);

  // // create and append Dubai row for the table 
  // var dubaiRow = document.createElement('tr');
  // tableBranch.appendChild(dubaiRow);

  // // create and append Paris row for the table 
  // var parisRow = document.createElement('tr');
  // tableBranch.appendChild(parisRow);

  // // create and append Lima row for the table 
  // var limaRow = document.createElement('tr');
  // tableBranch.appendChild(limaRow);
}

//////  create and append  header  function
function Header() {
  // get and append the table 
    // create and append table row for the table 
  var tableRow = document.createElement('tr');
  tableBranch.appendChild(tableRow);

  var emptyHeader = document.createElement('th');
  tableRow.appendChild(emptyHeader);
  emptyHeader.textContent = 'emptycell';

  for (i = 0; i < workHour.length; i++) {

    var tableHeader = document.createElement('th');
    tableRow.appendChild(tableHeader);

    tableHeader.textContent = workHour[i]
  }
  tableHeader.textContent = 'Daily Location Total';


  /////// create render footer function 
}
function  Footer () {
    // create and append Total row for the table 
    var totalRow = document.createElement('tr');
    tableBranch.appendChild(totalRow);
    totalRow.textContent='Total';

    var columnTotal;
    for(i=0 ; i< workHour.length ;i++){
       columnTotal=document.createElement('td');
       totalRow.appendChild=(columnTotal);
       columnTotal.textContent=this.calculateCookiePerHour;
    }
  }


////// create objects for the Branch Constructor

var seattle= new Branch('Seattle', 23, 65, 6.3);
var tokyo = new Branch('Tokyo', 3, 24, 1.2);
var dubai = new Branch('Dubai', 11, 38, 3.7);
var paris = new Branch('Paris', 20, 38, 2.3);
var lima = new Branch('Lima', 2, 16, 4.6);


/////// calling 
for(var i=0 ; i <locations.length ; i++ ){
locations[i].calculateCustPerHour();
locations[i].calculateCookiePerHour();
locations[i].renderRow();

console.log(locations)}