'use strict';

// array of hours
var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var tableEl = document.getElementById('table');

// constructor function for business locations
function BusinessLocation(name, minPerCust, maxPerCust, avgCookiePerSale) {
  this.name = name;
  this.min = minPerCust;
  this.max = maxPerCust;
  this.cookieAvg = avgCookiePerSale;
  this.avgCustomerNum = [];
  this.cookieNumPerHr = [];
  this.totalCookies = 0;
  allLocations.push(this);
}

// calculates average customer number
BusinessLocation.prototype.customerNum = function(){
  for (var i = 0; i < time.length; i++) {
    // uses helper function called makesRandomNumber
    var customerValue = makesRandomNumber(this.min, this.max);
    //console.log('customer value is ' + customerValue);
    this.avgCustomerNum.push(customerValue);
  }
};

// Calculates cookies per hour and total cookies needed per day
BusinessLocation.prototype.cookiesPerHour = function(){
  this.customerNum();
  for (var i = 0; i < time.length; i++) {
    var cookieValue = Math.ceil(this.cookieAvg * this.avgCustomerNum[i]);
    //console.log('cookie value', cookieValue);
    this.cookieNumPerHr.push(cookieValue);
    //add up cookies
    this.totalCookies += this.cookieNumPerHr[i];
  }
};

BusinessLocation.prototype.renderLocation = function() {
  this.cookiesPerHour();

  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  // render the location names
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  // render cookies per hour
  //write for loop that iterates through cookies per hour: for each iteration, create new tdEl variable, and add content so this.cookiesperhour[i] and append it to the trEl
  for (var i = 0; i < this.cookieNumPerHr.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookieNumPerHr[i];
    trEl.appendChild(tdEl);
  }
  
  // Render the cookie total per location
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);
  
};


// make instances
new BusinessLocation('First and Pike', 23, 65, 6.3);
new BusinessLocation('SeaTac', 3, 24, 1.2);
new BusinessLocation('Seattle Center', 11, 38, 3.7);
new BusinessLocation('Capitol Hill', 20, 38, 2.3);
new BusinessLocation('Alki', 2, 16, 4.6);



// helper function to generate random number of customers
// got this function from MDN - math.random() doc
function makesRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function to make header for table:
function makeHeader(){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  //space for location area
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
 
  for(var i = 0; i < time.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = time[i];
    trEl.appendChild(thEl);
  }

  // Daily Location Total Header
  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
}


function renderAll() {
  makeHeader();
  // loop through each instance and for each instance, call the method on the prototype to make it run
  for (var i = 0; i < allLocations.length; i++){
    allLocations[i].renderLocation(); 
  }
}

renderAll();


