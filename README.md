# Metal Mate Javascript Project
Website to view the latest metal prices

This project is to build a website which displays the latest metal prices for a chosen metal in the chosen currency.
It is a fully responsive site written in just HTML, CSS and Javascript.
The purpose of this project was to add a more recent Javascript project to my portfolio and practise my JavaScript skills.

The site uses an API from gold-api.com to provide the metal prices - https://api.gold-api.com/price/{symbol}/{?currency}.


It also retrieves all available symbols from this api site using the https://api.gold-api.com/symbols endpoint and adds them to the 
drop-down list. 

These API's are provided free and you can see the documentation [here](https://gold-api.com/docs).

![Responsive Displays](docs/images/am-i-responsive.png)

# Features 

The site consists of a single page with a large heading, a motivational area, a preference area and a price area. 

The currencies for the drop down are loaded from an array on first visiting the site and the first on the list 'EUR' is set as the default selection.  

The metals for the drop down are loaded from the symbols end-point of the gold-api.com API also on first visiting the site.
Gold is loaded first so that it is the default value selected on entry. 

The Price information is then retrieved on entry for the defaults once retrieved from the API. 

It has a button control to update price details


## Existing Features

- __The Metal Mate Heading__

  - Featured at the top of the page, the Metal Mate heading is easy to see for the user and sets the style of the site.

![Heading](docs/images/Heading.png)

  - __The Motivational Area__

  - This section will display a message to explain to users the point of the site and explain how they can interact with the site.

![Motivational Area](docs/images/MotivationalArea.png)

- __The Preferences Area__

  - This section allows the user to select the metal/symbol of preferance and the currency. 
  - The options stack on top of each other on small screens like phones.

![Preferences](docs/images/Preferences.png)


![Preferences](docs/images/Preferences-Phone.png)


- __The Price Area__

  - This section will display the information returned from the API. 
  
  This includes the current spot price for the chosen metal, the current exhange rate to the dollar and the date it was last updated in GMT time.

  ![Price Area](docs/images/PriceArea.png)


  ![Price Area](docs/images/PriceArea-Phone.png)


- __The Button section__

  - The button in this section allows users to refresh the price details of the current preferences.

![Button Area Start](docs/images/ButtonArea.png) 


# Technologies used

## Languages
* HTML
* CSS
* Javascript

## Libraries & Framework
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
  The font I used was Roboto from Google Fonts [Roboto](https://fonts.google.com/?query=Roboto "Roboto") which I felt gave the site a clean look. 

## Tools
* [gold-api.com](https://gold-api.com/ "GOLD PRICE API")