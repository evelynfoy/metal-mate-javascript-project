"use strict";
/*jshint strict: global */
/*jshint esversion: 8 */

// Define references to html document elements
const motivationalAreaRef = document.querySelector('#motivational-area');
const metalChoiceRef = document.querySelector('#metal-choice');
const currencyChoiceRef = document.querySelector('#currency-choice');
const buttonRef = document.querySelector('#button');

/**
 * Calls the appropriate function when the button is clicked based on its text value or
 * resets the game to start again
 */
async function buttonClicked() {
  const prices = await fetchDataFromAPI("price");
  console.log(prices);

}

/**
 * If mode is metals then it returns a list of valid symbols otherwise it returns the specific price requested.
 * For symbols it fetches the list using the https://api.gold-api.com/symbols url
 * For price information it retrieves the preferences made by the user and uses 
 * the https://api.gold-api.com/price/${metal}/${currency} url 
 * If the site is unavailable then an alert message is shown and the button is disabled.
 * @param {string} mode 
 * @returns {Response} Results of the fetch requested, categories or questions
 */
async function fetchDataFromAPI(mode) {

  const metal = metalChoiceRef.value;
  const currency = currencyChoiceRef.value;

  const metalsUrl = `https://api.gold-api.com/symbols`;
  const priceUrl = `https://api.gold-api.com/price/${metal}/${currency}`;
  
  const url = (mode === "metals") ? metalsUrl : priceUrl;

  try {
    const result = await fetch(url);
    return await result.json();
  } 
  catch (error) {
    alert(
      `Unfortunately the prices site is currently unavailable. 
Please try again later.`);
    buttonRef.disabled = true;
  }
}

/**
 * Calls the async function that fetches the symbols using an API passing in a mode of 'metals'.
 * Creates an html option for each symbol and updates the html page with the list
 */
async function loadMetals() {

  const metals = await fetchDataFromAPI("metals");
  let html = `<select name="Gold" value="XAU" id="metal-choice" >`;

  metals.forEach(
    metal => {
      html += `<option value="${metal.symbol}">${metal.name}</option>`;
    }
  );

  metalChoiceRef.innerHTML = html;
}

/**
 * Creates an html option for each currency in a currency array and updates the html page with the list
 */
function loadCurrencies() {

  let currencies = ["EUR", "AUD", "BRL", "CAD", "CHF", "CNY", "DKK",  "GBP", "HKD", "INR","JPY", "KRW", "MXN", "NOK", "NZD", "SEK", "SGD", "USD", "ZAR"];
  let html = `<select name="USD" value="USD" id="currency-choice" >`;
  currencies.forEach(
    currency => {
      html += `<option value="${currency}">${currency}</option>`;
    }
  );
  currencyChoiceRef.innerHTML = html;
}

// Load metals options from API 
loadMetals();
loadCurrencies();

// Set button click functions
buttonRef.addEventListener('click', buttonClicked);