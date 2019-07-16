'use strict';

// Ways to organize code further:
// create another function within each object that adds literal strings (ie, `${hours[i]}: ${this.cookiesEachHour[i]} cookies) instead of having strings within each object
// var ulEl = document.getElementById('cookiesNeededSeatac'); <---- this is a global variable that can be referenced instead of having it inside each object

// array of hours
var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// object literals for each store
var FirstAndPike = {
  minPerCust: 23,
  maxPerCust: 65,
  avgCookiePerSale: 6.3,
  customerNum: [],
  cookieNumPerHr: [],
  totalCookies: 0,
  // generate the number of customers for each hour
  getCustomerNum: function() {
    for (var i = 0; i < time.length; i++) {
      var customerValue = randomCustPerHour(this.minPerCust, this.maxPerCust);
      this.customerNum.push(customerValue);
    }
    console.log('customer number generated: ' + this.customerNum);
  },
  // generate the number of customers
  getCookiesPerHour: function() {
    this.getCustomerNum();
    for (var i = 0; i < this.customerNum.length; i++) {
      var cookieValue = Math.ceil(this.avgCookiePerSale * this.customerNum[i]);
      this.cookieNumPerHr.push(cookieValue);
      //add up cookies
      this.totalCookies += this.cookieNumPerHr[i];
    }
    console.log('cookies per hour is: ' + this.cookieNumPerHr);
    console.log('total cookies for the day is: ' + this.totalCookies);
  },
  render: function(){
    var ulEl = document.getElementById('cookiesNeededPike');
    for (var i = 0; i < time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + ': ' + this.cookieNumPerHr[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${this.totalCookies} cookies`;
  }

}; // end of FirstAndPike object


var SeaTacAirport = {
  minPerCust: 3,
  maxPerCust: 24,
  avgCookiePerSale: 1.2,
  customerNum: [],
  cookieNumPerHr: [],
  totalCookies: 0,
  getCustomerNum: function() {
    for (var i = 0; i < time.length; i++) {
      var customerValue = randomCustPerHour (this.minPerCust, this.maxPerCust);
      this.customerNum.push(customerValue);
    }
    console.log('customer number generated: ' + this.customerNum);
  },
  getCookiesPerHour: function() {
    this.getCustomerNum();
    for (var i = 0; i < this.customerNum.length; i++) {
      var cookieValue = Math.ceil(this.avgCookiePerSale * this.customerNum[i]);
      this.cookieNumPerHr.push(cookieValue);
      //add up cookies
      this.totalCookies += this.cookieNumPerHr[i];
    }
    console.log('cookies per hour is: ' + this.cookieNumPerHr);
    console.log('total cookies for the day is: ' + this.totalCookies);
  },
  render: function(){
    var ulEl = document.getElementById('cookiesNeededSeatac');
    for (var i = 0; i < time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + ': ' + this.cookieNumPerHr[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${this.totalCookies} cookies`;
  }
}; // end of SeaTac object


var seattleCenter = {
  minPerCust: 23,
  maxPerCust: 65,
  avgCookiePerSale: 6.3,
  customerNum: [],
  cookieNumPerHr: [],
  totalCookies: 0,
  getCustomerNum: function() {
    for (var i = 0; i < time.length; i++) {
      // function randomCustPerHour is called every iteration and pushed to
      var customerValue = randomCustPerHour (this.minPerCust, this.maxPerCust);
      this.customerNum.push(customerValue);
    }
    console.log('customer number generated: ' + this.customerNum);
  },
  getCookiesPerHour: function() {
    this.getCustomerNum();
    for (var i = 0; i < this.customerNum.length; i++) {
      var cookieValue = Math.ceil(this.avgCookiePerSale * this.customerNum[i]);
      this.cookieNumPerHr.push(cookieValue);
      //add up cookies
      this.totalCookies += this.cookieNumPerHr[i];
    }
    console.log('cookies per hour is: ' + this.cookieNumPerHr);
    console.log('total cookies for the day is: ' + this.totalCookies);
  },
  render: function(){
    var ulEl = document.getElementById('cookiesNeededCenter');
    for (var i = 0; i < time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + ': ' + this.cookieNumPerHr[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${this.totalCookies} cookies`;
  }
}; // end of Seattle Center object


var capitolHill = {
  minPerCust: 23, 
  maxPerCust: 65,
  avgCookiePerSale: 6.3,
  customerNum: [],
  cookieNumPerHr: [],
  totalCookies: 0,
  getCustomerNum: function() {
    for (var i = 0; i < time.length; i++) {
      var customerValue = randomCustPerHour (this.minPerCust, this.maxPerCust);
      this.customerNum.push(customerValue);
    }
    console.log('customer number generated: ' + this.customerNum);
  },
  getCookiesPerHour: function() {
    this.getCustomerNum();
    for (var i = 0; i < this.customerNum.length; i++) {
      var cookieValue = Math.ceil(this.avgCookiePerSale * this.customerNum[i]);
      this.cookieNumPerHr.push(cookieValue);
      this.totalCookies += this.cookieNumPerHr[i];
    }
    console.log('cookies per hour is: ' + this.cookieNumPerHr);
    console.log('total cookies for the day is: ' + this.totalCookies);
  },
  render: function(){
    var ulEl = document.getElementById('cookiesNeededHill');
    for (var i = 0; i < time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + ': ' + this.cookieNumPerHr[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${this.totalCookies} cookies`;
  }
}; // end of Capitol Hill object


var alki = {
  minPerCust: 23, 
  maxPerCust: 65,
  avgCookiePerSale: 6.3,
  customerNum: [],
  cookieNumPerHr: [],
  totalCookies: 0,
  getCustomerNum: function() {
    for (var i = 0; i < time.length; i++) {
      var customerValue = randomCustPerHour (this.minPerCust, this.maxPerCust);
      this.customerNum.push(customerValue);
    }
    console.log('customer number generated: ' + this.customerNum);
  },
  getCookiesPerHour: function() {
    this.getCustomerNum();
    for (var i = 0; i < this.customerNum.length; i++) {
      var cookieValue = Math.ceil(this.avgCookiePerSale * this.customerNum[i]);
      this.cookieNumPerHr.push(cookieValue);
      //add up cookies
      this.totalCookies += this.cookieNumPerHr[i];
    }
    console.log('cookies per hour is: ' + this.cookieNumPerHr);
    console.log('total cookies for the day is: ' + this.totalCookies);
  },
  render: function(){
    var ulEl = document.getElementById('cookiesNeededAlki');
    for (var i = 0; i < time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + ': ' + this.cookieNumPerHr[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${this.totalCookies} cookies`;
  }
}; // end of Capitol Hill object


// --> Call the Functions <--
//First and Pike
FirstAndPike.getCookiesPerHour();
FirstAndPike.render();
// SeaTac
SeaTacAirport.getCookiesPerHour();
SeaTacAirport.render();
//Seattle Center
seattleCenter.getCookiesPerHour();
seattleCenter.render();
//Capitol Hill
capitolHill.getCookiesPerHour();
capitolHill.render();
//Alki
alki.getCookiesPerHour();
alki.render();


// helper function to generate random number of customers
// got this function from MDN - math.random() doc
function randomCustPerHour(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
