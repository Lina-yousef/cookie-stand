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

// odject seatel and its properities 
var seattel = {
  name: 'seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerHour: 6.3,

  avgCustPerHour: [],

  calculateCustPerHour: function () {

    for (var i = 0; i < workHour.length; i++) {
      this.avgCustPerHour.push(randomCust(this.minCustPerHour, this.maxCustPerHour));

    }

    //return this.avgCustPerHour;
  },

  totalCookie: 0,
  avgCookiePurchased: [],

  calculateCookiePerHour: function () {
    for (var i = 0; i < workHour.length; i++) {
      this.avgCookiePurchased.push(Math.floor(this.avgCustPerHour[i] * this.avgCookiesPerHour));

      this.totalCookie = this.totalCookie + this.avgCookiePurchased[i];

      //     } for (var x = 0; x < workHour; x++) {
      //       console.log(workHour[x], ':', this.avgCookiesPerHour[x]);
      //     }

      console.log('total', this.totalCookie);

    }
  },
  // render function to section for each location 
  render: function () {

    var parentDiv = document.getElementById('cookieProfile');
    var locationSec = document.createElement('section');
    parentDiv.appendChild(locationSec);

    var locationName = document.createElement('h3');
    locationSec.appendChild(locationName);
    locationName.textContent = 'Name : ' + this.name;

    var locationList = document.createElement('ul');
    locationSec.appendChild(locationList);
    // for loop to add each working hour and avgCookiePerHour with list 
    for (var i = 0; i < this.avgCookiePurchased.length; i++) {

      var listItem = document.createElement('li');
      locationList.appendChild(listItem);
      listItem.textContent = workHour[i] + ':' + this.avgCookiePurchased[i] + 'Cookies';
    }
    listItem.textContent = 'Total :' + this.totalCookie;

  }

};
seattel.calculateCustPerHour();
seattel.calculateCookiePerHour();
console.log(seattel.avgCookiePurchased);

console.log(seattel.calculateCookiePerHour);
seattel.render();


//////// Tokyo
var tokyo = {
  name: 'Tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerHour: 1.2,
  avgCustPerHour: [],

  calculateCustPerHour: function () {

    for (var i = 0; i < workHour.length; i++) {
      this.avgCustPerHour.push(randomCust(this.minCustPerHour, this.maxCustPerHour));

    }

    //return this.avgCustPerHour;
  },

  totalCookie: 0,
  avgCookiePurchased: [],

  calculateCookiePerHour: function () {
    for (var i = 0; i < workHour.length; i++) {
      this.avgCookiePurchased.push(Math.floor(this.avgCustPerHour[i] * this.avgCookiesPerHour));

      this.totalCookie = this.totalCookie + this.avgCookiePurchased[i];

      //     } for (var x = 0; x < workHour; x++) {
      //       console.log(workHour[x], ':', this.avgCookiesPerHour[x]);
      //     }

      console.log('total', this.totalCookie);

    }
  },
  // render function to section for each location 
  render: function () {

    var parentDiv = document.getElementById('cookieProfile');
    var locationSec = document.createElement('section');
    parentDiv.appendChild(locationSec);

    var locationName = document.createElement('h3');
    locationSec.appendChild(locationName);
    locationName.textContent = 'Name : ' + this.name;

    var locationList = document.createElement('ul');
    locationSec.appendChild(locationList);
    // for loop to add each working hour and avgCookiePerHour with list 
    for (var i = 0; i < this.avgCookiePurchased.length; i++) {

      var listItem = document.createElement('li');
      locationList.appendChild(listItem);
      listItem.textContent = workHour[i] + ':' + this.avgCookiePurchased[i] + 'Cookies';
    }
    listItem.textContent = 'Total :' + this.totalCookie;
  }
};

tokyo.calculateCustPerHour();
tokyo.calculateCookiePerHour();
console.log(tokyo.avgCookiePurchased);

console.log(tokyo.calculateCookiePerHour);
tokyo.render();

///////////////Dubai
var dubai = {
  name: 'Dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerHour: 3.7,
  avgCustPerHour: [],

  calculateCustPerHour: function () {

    for (var i = 0; i < workHour.length; i++) {
      this.avgCustPerHour.push(randomCust(this.minCustPerHour, this.maxCustPerHour));

    }

    //return this.avgCustPerHour;
  },

  totalCookie: 0,
  avgCookiePurchased: [],

  calculateCookiePerHour: function () {
    for (var i = 0; i < workHour.length; i++) {
      this.avgCookiePurchased.push(Math.floor(this.avgCustPerHour[i] * this.avgCookiesPerHour));

      this.totalCookie = this.totalCookie + this.avgCookiePurchased[i];

      //     } for (var x = 0; x < workHour; x++) {
      //       console.log(workHour[x], ':', this.avgCookiesPerHour[x]);
      //     }

      console.log('total', this.totalCookie);

    }
  },
  // render function to section for each location 
  render: function () {

    var parentDiv = document.getElementById('cookieProfile');
    var locationSec = document.createElement('section');
    parentDiv.appendChild(locationSec);

    var locationName = document.createElement('h3');
    locationSec.appendChild(locationName);
    locationName.textContent = 'Name : ' + this.name;

    var locationList = document.createElement('ul');
    locationSec.appendChild(locationList);
    // for loop to add each working hour and avgCookiePerHour with list 
    for (var i = 0; i < this.avgCookiePurchased.length; i++) {

      var listItem = document.createElement('li');
      locationList.appendChild(listItem);
      listItem.textContent = workHour[i] + ':' + this.avgCookiePurchased[i] + 'Cookies';
    }
    listItem.textContent = 'Total :' + this.totalCookie;

  }

};
dubai.calculateCustPerHour();
dubai.calculateCookiePerHour();
console.log(dubai.avgCookiePurchased);

console.log(dubai.calculateCookiePerHour);
dubai.render();



////////// Paris
var Paris = {
  name: 'Paris',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerHour: 2.3,
  avgCustPerHour: [],

  calculateCustPerHour: function () {

    for (var i = 0; i < workHour.length; i++) {
      this.avgCustPerHour.push(randomCust(this.minCustPerHour, this.maxCustPerHour));

    }

    //return this.avgCustPerHour;
  },

  totalCookie: 0,
  avgCookiePurchased: [],

  calculateCookiePerHour: function () {
    for (var i = 0; i < workHour.length; i++) {
      this.avgCookiePurchased.push(Math.floor(this.avgCustPerHour[i] * this.avgCookiesPerHour));

      this.totalCookie = this.totalCookie + this.avgCookiePurchased[i];

      //     } for (var x = 0; x < workHour; x++) {
      //       console.log(workHour[x], ':', this.avgCookiesPerHour[x]);
      //     }

      console.log('total', this.totalCookie);

    }
  },
  // render function to section for each location 
  render: function () {

    var parentDiv = document.getElementById('cookieProfile');
    var locationSec = document.createElement('section');
    parentDiv.appendChild(locationSec);

    var locationName = document.createElement('h3');
    locationSec.appendChild(locationName);
    locationName.textContent = 'Name : ' + this.name;

    var locationList = document.createElement('ul');
    locationSec.appendChild(locationList);
    // for loop to add each working hour and avgCookiePerHour with list 
    for (var i = 0; i < this.avgCookiePurchased.length; i++) {

      var listItem = document.createElement('li');
      locationList.appendChild(listItem);
      listItem.textContent = workHour[i] + ':' + this.avgCookiePurchased[i] + 'Cookies';
    }
    listItem.textContent = 'Total :' + this.totalCookie;

  }

};
Paris.calculateCustPerHour();
Paris.calculateCookiePerHour();
console.log(Paris.avgCookiePurchased);

console.log(Paris.calculateCookiePerHour);
Paris.render();

///////////////Lima
var lima = {
  name: 'Lima',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerHour: 4.6,
  avgCustPerHour: [],

  calculateCustPerHour: function () {

    for (var i = 0; i < workHour.length; i++) {
      this.avgCustPerHour.push(randomCust(this.minCustPerHour, this.maxCustPerHour));

    }

    //return this.avgCustPerHour;
  },

  totalCookie: 0,
  avgCookiePurchased: [],

  calculateCookiePerHour: function () {
    for (var i = 0; i < workHour.length; i++) {
      this.avgCookiePurchased.push(Math.floor(this.avgCustPerHour[i] * this.avgCookiesPerHour));

      this.totalCookie = this.totalCookie + this.avgCookiePurchased[i];

      //     } for (var x = 0; x < workHour; x++) {
      //       console.log(workHour[x], ':', this.avgCookiesPerHour[x]);
      //     }

      console.log('total', this.totalCookie);

    }
  },
  // render function to section for each location 
  render: function () {

    var parentDiv = document.getElementById('cookieProfile');
    var locationSec = document.createElement('section');
    parentDiv.appendChild(locationSec);

    var locationName = document.createElement('h3');
    locationSec.appendChild(locationName);
    locationName.textContent = 'Name : ' + this.name;

    var locationList = document.createElement('ul');
    locationSec.appendChild(locationList);
    // for loop to add each working hour and avgCookiePerHour with list 
    for (var i = 0; i < this.avgCookiePurchased.length; i++) {

      var listItem = document.createElement('li');
      locationList.appendChild(listItem);
      listItem.textContent = workHour[i] + ':' + this.avgCookiePurchased[i] + 'Cookies';
    }
    listItem.textContent = 'Total :' + this.totalCookie;

  }

};
lima.calculateCustPerHour();
lima.calculateCookiePerHour();
console.log(lima.avgCookiePurchased);

console.log(lima.calculateCookiePerHour);
lima.render();