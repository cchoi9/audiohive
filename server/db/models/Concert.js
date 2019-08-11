const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('concerts', {
  artist: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  venue: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tickets: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})
