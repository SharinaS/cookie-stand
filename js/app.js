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

// -------- Prototype Functions --------
// calculates average customer number
BusinessLocation.prototype.generateCustomerNum = function(){
  this.avgCustomerNum = [];
  for (var i = 0; i < time.length; i++) {
    // uses helper function called makesRandomNumber
    var customerValue = makesRandomNumber(this.min, this.max);
    //console.log('customer value is ' + customerValue);
    this.avgCustomerNum.push(customerValue);
  }
};

// Calculates cookies per hour and total cookies needed per day
BusinessLocation.prototype.generateCookiesPerHour = function(){
  this.generateCustomerNum();
  this.cookieNumPerHr = [];
  this.totalCookies = 0;
  for (var i = 0; i < time.length; i++){
    var cookieValue = Math.ceil(this.cookieAvg * this.avgCustomerNum[i]);
    //console.log('cookie value', cookieValue);
    this.cookieNumPerHr.push(cookieValue);
    //add up cookies
    this.totalCookies += this.cookieNumPerHr[i];
  }
};


// Renders location names, cookies per hour and cookie total per location
BusinessLocation.prototype.renderLocation = function() {
  this.generateCookiesPerHour();
  
  // create element - tr
  var trEl = document.createElement('tr');
  // append tr to tableBody
  tableEl.appendChild(trEl);

  // Render location names
  // create a td element
  var tdEl = document.createElement('td');
  // give it content
  tdEl.textContent = this.name;
  // append it to tr
  trEl.appendChild(tdEl);

  // Render cookies per hour
  //DRY -- write for loop that iterates through cookies per hour: for each iteration, create new tdEl variable, and add content so this.cookiesperhour[i] and append it to the trEl
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



// -------- Make Instances -----------

// make instances
new BusinessLocation('First and Pike', 23, 65, 6.3);
new BusinessLocation('SeaTac', 3, 24, 1.2);
new BusinessLocation('Seattle Center', 11, 38, 3.7);
new BusinessLocation('Capitol Hill', 20, 38, 2.3);
new BusinessLocation('Alki', 2, 16, 4.6);


// Event handler
function handleClick(event){
  event.preventDefault();

  // target events
  var name = event.target.name.value;
  var minPerCust = event.target.minPerCust.value;
  var maxPerCust = event.target.maxPerCust.value;
  var avgCookiePerSale = event.target.avgCookiePerSale.value;
  console.log('here are the 4 input parameters from the form: ' + name, minPerCust, maxPerCust, avgCookiePerSale);
  // create instance for location
  new BusinessLocation(name, minPerCust, maxPerCust, avgCookiePerSale);
  console.log('allLocations: ', allLocations);
  // Use DOM manipulation to clear table - get element by ID. Table is the node, so the node gets cleared.

  tableEl.innerHTML='';
  console.log('allLocations: ', allLocations);

  // re-render table
  renderAll();
  console.log('supposed to have rendered everything!');
}

// helper function to generate random number of customers
// got this function from MDN - math.random() doc
function makesRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// event listener
var formEl = document.getElementById('form');
formEl.addEventListener('submit', handleClick);

// ----------- Table Header and Footer ---------

// function to make header for table:
function makeHeader(){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  // makes one space so 6am starts one column to the right
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);

  // iterates through time, so each column header is filled with i from time of day
  for(var i = 0; i < time.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = time[i];
    trEl.appendChild(thEl);
  }

  // Daily Location Total Header
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
}

// calculate the number of cookies produced from all stores each hour
var totalCookiesPerHour = [];
function calculateTotalCookiesEveryHour(){
  
  for (var i = 0; i < time.length; i++){
    var total = 0;
    for (var j = 0; j < allLocations.length; j++){
      total += allLocations[j].cookieNumPerHr[i];
      console.log('I am the total from allLocations[j].cookieNumPerHr[i]');
    }
    totalCookiesPerHour.push(total);
  }
  return totalCookiesPerHour;
}


// function to make footer for table
function makeFooter(){
  calculateTotalCookiesEveryHour();

  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  // make title for row in column 1
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals';
  trEl.appendChild(tdEl);
  // iterate through array with totals to make new row 

}




// Calls makeHeader function and iterates through all instances to render table
function renderAll(){
  makeHeader();
  // loop through each instance and for each instance, call the method on the prototype to make it run
  for (var i = 0; i < allLocations.length; i++){
    allLocations[i].renderLocation();
  }
  makeFooter();
}

// Render Everything
renderAll();
