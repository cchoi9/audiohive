# AudioHive

AudioHive is webscraping application that uniquely handles requests for information based on date, artist, location and venue from ticket vendor websites such as Eventbrite, LiveNation, and Ticketmaster. It retrieves scraped data using from websites regarding concerts happening in the NYC area.

## Technologies Used
- [React](https://reactjs.org/docs/getting-started.html)
- [Puppeteer](https://developers.google.com/web/tools/puppeteer/get-started)
- [PostgreSQL](https://www.postgresql.org/about/)
- [Express](https://expressjs.com/)
- [Sequelize](https://www.fusioncharts.com/)

# Features

## Filter
![one](https://media.giphy.com/media/iIM85U1IZvl77vELRX/giphy.gif)
Filter by any string characters matching the date, artist, and venue

## Puppeteer Scraping
![two](https://media.giphy.com/media/ZAqfT3asYOAU6zYy8T/giphy.gif)
Utilizes a headless chrome browser, to automate, paginate through results and scrape a specified number of entries from selected website (LiveNation is demonstrated here)


## Setup

### Requirements
In order to run AudioHive on your device

In order to fully install all packages & dependencies:
- `npm install` in your run time environment 

- `npm run start-dev` to test and preview AudioHive


