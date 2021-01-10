'use strict';
console.log('hello js');


// for loop to insert iside the array the working hours 
var workHour = [];
for (var i = 6; i < 12; i++) {
  workHour.push(i + 'am');
}
workHour.push(12 + 'pm')
for (var j = 1; j < 6; j++) {
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
      this.calculateCustPerHour.push(randomCust(this.minCustPerHour, this.maxCustPerHour));
      console.log(this.calculateCustPerHour);
    }
    return this.avgCustPerHour;
  },

  totalCookie: 0,
  avgCookiePurchased: [],

  calculateCookiePerHour: function () {
    for (y = 0; y < workHour.length; y++) {
      this.avgCookiePurchased.push(Math.floor(this.avgCustPerHour[y]) * this.avgCookiesPerHour);
      this.totalCookie = this.totalCookie + this.avgCookiePurchased[y];

    } for (var x = 0; x < workHour; x++) {
      console.log(workHour[x], ':', this.avgCookiesPerHour[x]);
    }

    console.log('total', this.totalCookie);
    console.log(this.avgCookiePurchased, this.totalCookie);

  }
}


var Tokyo = {
  name: 'Tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerHour: 1.2,
  avgCustPerHour: [],


  calculateCustPerHour: function () {

    for (var i = 0; i < workHour.length; i++) {
      this.calculateCustPerHour.push(randomCust(this.minCustPerHour, this.maxCustPerHour));
      console.log(this.calculateCustPerHour);
    }
    return this.avgCustPerHour;
  },

  totalCookie: 0,
  avgCookiePurchased: [],

  calculateCookiePerHour: function () {
    for (y = 0; y < workHour.length; y++) {
      this.avgCookiePurchased.push(Math.floor(this.avgCustPerHour[y]) * this.avgCookiesPerHour);
      this.totalCookie = this.totalCookie + this.avgCookiePurchased[y];

    } for (var x = 0; x < workHour; x++) {
      console.log(workHour[x], ':', this.avgCookiesPerHour[x]);
    }

    console.log('total', this.totalCookie);
    console.log(this.avgCookiePurchased, this.totalCookie);

  }
}

var Dubai = {
  name: 'Dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerHour: 3.7,
  avgCustPerHour: [],

  calculateCustPerHour: function () {

    for (var i = 0; i < workHour.length; i++) {
      this.calculateCustPerHour.push(randomCust(this.minCustPerHour, this.maxCustPerHour));
      console.log(this.calculateCustPerHour);
    }
    return this.avgCustPerHour;
  },

  totalCookie: 0,
  avgCookiePurchased: [],

  calculateCookiePerHour: function () {
    for (y = 0; y < workHour.length; y++) {
      this.avgCookiePurchased.push(Math.floor(this.avgCustPerHour[y]) * this.avgCookiesPerHour);
      this.totalCookie = this.totalCookie + this.avgCookiePurchased[y];

    } for (var x = 0; x < workHour; x++) {
      console.log(workHour[x], ':', this.avgCookiesPerHour[x]);
    }

    console.log('total', this.totalCookie);
    console.log(this.avgCookiePurchased, this.totalCookie);
    
  }  
}  
var Paris = {
  name: 'Paris',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerHour: 2.3,
  avgCustPerHour: [],
  
  
  calculateCustPerHour: function () {
    
    for (var i = 0; i < workHour.length; i++) {
      this.calculateCustPerHour.push(randomCust(this.minCustPerHour, this.maxCustPerHour));
      console.log(this.calculateCustPerHour);
    }  
    return this.avgCustPerHour;
  },  
  
  totalCookie: 0,
  avgCookiePurchased: [],
  
  calculateCookiePerHour: function () {
    for (y = 0; y < workHour.length; y++) {
      this.avgCookiePurchased.push(Math.floor(this.avgCustPerHour[y]) * this.avgCookiesPerHour);
      this.totalCookie = this.totalCookie + this.avgCookiePurchased[y];
      
    } for (var x = 0; x < workHour; x++) {
      console.log(workHour[x], ':', this.avgCookiesPerHour[x]);
    }  
    
    console.log('total', this.totalCookie);
    console.log(this.avgCookiePurchased, this.totalCookie);
    
  }  
  
}  

     var Lima = {
       name: 'Lima',
    minCustPerHour : 2,
    maxCustPerHour : 16,
    avgCookiesPerHour : 4.6,
    avgCustPerHour: [],
  
    calculateCustPerHour: function () {
  
      for (var i = 0; i < workHour.length; i++) {
        this.calculateCustPerHour.push(randomCust(this.minCustPerHour, this.maxCustPerHour));
        console.log(this.calculateCustPerHour);
      }
      return this.avgCustPerHour;
    },
  
    totalCookie: 0,
    avgCookiePurchased: [],
  
    calculateCookiePerHour: function () {
      for (y = 0; y < workHour.length; y++) {
        this.avgCookiePurchased.push(Math.floor(this.avgCustPerHour[y]) * this.avgCookiesPerHour);
        this.totalCookie = this.totalCookie + this.avgCookiePurchased[y];
  
      } for (var x = 0; x < workHour; x++) {
        console.log(workHour[x], ':', this.avgCookiesPerHour[x]);
      }
  
      console.log('total', this.totalCookie);
      console.log(this.avgCookiePurchased, this.totalCookie);
  
    }

};

var location =[seattel , Tokyo , Dubai , Paris , Lima];

for (var n=0 ; n <location.length ; n++){

  location[n].calculateCustPerHour();
  location[n].calculateCookiePerHour();

  var parentDiv = document.getElementById('cookieProfile');
  var cookieArticle = document.createElement('article');
cookieArticle.textContent = location[n].name;
parentDiv.appendChild(cookieArticle);


var cookieList=document.createElement('ul');
cookieArticle.setAttribute('id','hour');
parentDiv.appendChild(cookieArticle);

var cookieItem =[];
 for (var k = 0; k < workHour.length; k++) {
   cookieItem=document.createElement('li');
   cookieItem.setAttribute('Place','hours');
   cookieList.appendChild(cookieItem);
   cookieItem.textContent=(workHour[k]+ ' : ' + location[k].avgCookiesPerHour) ;
   
}

cookieItem.textContent = ('total : ' + location[k].totalCookie);

}





