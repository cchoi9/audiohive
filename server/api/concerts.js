const router = require('express').Router()
const {Concert} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const shows = await Concert.findAll({order: [['date', 'DESC']]})
    res.json(shows)
  } catch (err) {
    next(err)
  }
})
