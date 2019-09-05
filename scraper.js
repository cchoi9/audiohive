const puppeteer = require('puppeteer')
const Concert = require('./server/db/models/Concert')

const livenation = scraper =>
  `https://www.livenation.com/cities/98151/${scraper}`

// export async function runCron() {
//   try {
//     await scraper.initialize('new-york-ny')

//     let results = await scraper.getResults(30)
//     console.log(results)
//   } catch (error) {
//     console.log('OUR ERROR', error)
//   }
// }

const self = {
  browser: null,
  page: null,

  initialize: async scraper => {
    self.browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true
    })
    self.page = await self.browser.newPage()

    /*Go to LiveNation */
    await self.page.goto(livenation(scraper), {waitUntil: 'networkidle0'})
  },

  getResults: async nr => {
    let results = []

    do {
      let newResults = await self.parseResults()

      results = [...results, ...newResults]

      if (results.length < nr) {
        let showMoreButton = await self.page.$('button[class="btn-more"]')
        if (showMoreButton) {
          await showMoreButton.click()
          await self.page.waitForNavigation({
            waitUntil: 'networkidle0',
            timeout: 0
          })
        } else {
          break
        }
      }
    } while (results.length <= nr)

    return results.slice(0, nr)
  },
  parseResults: async () => {
    let elements = await self.page.$$('div[class*="event-details"]')
    let results = []

    for (let element of elements) {
      let time = await element.$eval('span[class*="event-day"]', node =>
        node.innerText.trim()
      )
      let artist = await element.$eval(
        'div[class="event-details"] > h3',
        node => node.innerText.trim()
      )
      let venue = await element.$eval('div[class="event-details"] > h4', node =>
        node.innerText.trim()
      )
      let tickets = await element.$eval(
        'div[class="event-details"] > a[class*="event-image event-link"]',
        node => node.getAttribute('data-buy')
      )
      let date = await element.$eval('span[class*="event-date"]', node =>
        node.innerText.trim()
      )

      results.push({
        time,
        date,
        artist,
        venue,
        tickets
      })
    }

    results.forEach(async concert => {
      const active = await Concert.findOne({
        where: {
          tickets: concert.tickets
        }
      })
      if (!active) {
        await Concert.create(concert)
      }
    })
    return results
  }
}

module.exports = self
// console.log(
//   `ARTIST: ${artist},
// VENUE: ${venue},
// DATE: ${date}
// TICKET LINK:${txlink}`
// )
