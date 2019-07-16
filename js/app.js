'use strict';

/*
First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:

Stores the min/max hourly customers, and the average cookies per customer, in object properties

Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

Store the results for each location in a separate array... perhaps as a property of the object representing that location

Display the values of each array as unordered lists in the browser

Calculating the sum of these hourly totals; your output for each location should look like this:
1st and Pike

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
8pm: 29 cookies
Total: 657 cookies

Display the lists on sales.html. 
array of customers, then loop through customers and multiply each one to get num of cookies
*/


var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var FirstAndPike = {
  minPerCust: 23, // cust per hour
  maxPerCust: 65,
  avgCookiePerSale: 6.3,
  customerNum: [],
  cookieNumPerHr: [],
  totalCookies: 0,
  // for loop here - to run function randomCustPerHour to get a new array with push. Existing within the object. The function randomCustPerHour is called everytime there is a for loop.
  getCustomerNum: function() {
    for (var i = 0; i < time.length; i++) {
      // function randomCustPerHour is called every iteration and pushed to
      var customerValue = randomCustPerHour (this.minPerCust, this.maxPerCust);
      this.customerNum.push(customerValue);
    }
    console.log('customer number generated: ' + this.customerNum);
  },
  // iterate through new array generated by forloop#1 - multiply the original arrays index value with average cookie per sale. --> output to 3rd array. Use this to access avgCookiePerSale.
  getCookiesPerHour: function() {
    for (var i = 0; i < this.customerNum.length; i++) {
      var cookieValue = Math.round(this.avgCookiePerSale * this.customerNum[i]);
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
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
  }

}; // end of FirstAndPike object


var SeaTacAirport = {
  minPerCust: 3, // cust per hour
  maxPerCust: 24,
  avgCookiePerSale: 1.2,
  customerNum: [],
  cookieNumPerHr: [],
  totalCookies: 0,
  // for loop here - to run function randomCustPerHour to get a new array with push. Existing within the object. The function randomCustPerHour is called everytime there is a for loop.
  getCustomerNum: function() {
    for (var i = 0; i < time.length; i++) {
      // function randomCustPerHour is called every iteration and pushed to
      var customerValue = randomCustPerHour (this.minPerCust, this.maxPerCust);
      this.customerNum.push(customerValue);
    }
    console.log('customer number generated: ' + this.customerNum);
  },
  getCookiesPerHour: function() {
    for (var i = 0; i < this.customerNum.length; i++) {
      var cookieValue = Math.round(this.avgCookiePerSale * this.customerNum[i]);
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
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
  }
}; // end of SeaTac object


var seattleCenter = {
  minPerCust: 23, // cust per hour
  maxPerCust: 65,
  avgCookiePerSale: 6.3,
  customerNum: [],
  cookieNumPerHr: [],
  totalCookies: 0,
  // for loop here - to run function randomCustPerHour to get a new array with push. Existing within the object. The function randomCustPerHour is called everytime there is a for loop.
  getCustomerNum: function() {
    for (var i = 0; i < time.length; i++) {
      // function randomCustPerHour is called every iteration and pushed to
      var customerValue = randomCustPerHour (this.minPerCust, this.maxPerCust);
      this.customerNum.push(customerValue);
    }
    console.log('customer number generated: ' + this.customerNum);
  },
  getCookiesPerHour: function() {
    for (var i = 0; i < this.customerNum.length; i++) {
      var cookieValue = Math.round(this.avgCookiePerSale * this.customerNum[i]);
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
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
  }
}; // end of Seattle Center object


var capitolHill = {
  minPerCust: 23, // cust per hour
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
    for (var i = 0; i < this.customerNum.length; i++) {
      var cookieValue = Math.round(this.avgCookiePerSale * this.customerNum[i]);
      this.cookieNumPerHr.push(cookieValue);
      //add up cookies
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
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
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
    for (var i = 0; i < this.customerNum.length; i++) {
      var cookieValue = Math.round(this.avgCookiePerSale * this.customerNum[i]);
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
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
  }
}; // end of Capitol Hill object


// --> Call the Functions <--
//First and Pike
FirstAndPike.getCustomerNum();
FirstAndPike.getCookiesPerHour();
FirstAndPike.render();
// SeaTac
SeaTacAirport.getCustomerNum();
SeaTacAirport.getCookiesPerHour();
SeaTacAirport.render();
//Seattle Center
seattleCenter.getCustomerNum();
seattleCenter.getCookiesPerHour();
seattleCenter.render();
//Capitol Hill
capitolHill.getCustomerNum();
capitolHill.getCookiesPerHour();
capitolHill.render();
//Alki
alki.getCustomerNum();
alki.getCookiesPerHour();
alki.render();


// --> Helper Function <--
// helper function to generate random number of customers
function randomCustPerHour(min, max){
  var numCustomers = Math.round(Math.random() * (max - min) + min);
  return numCustomers;
}





