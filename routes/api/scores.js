const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const Score = require('../../models/Score')

//  @route  GET api/leaderboard
//  @desc   Get leaderboard aka top 10
//  @access Public

router.get('/leaderboard', async (req, res) => {
  try {
    const scores = await Score.find().limit(10).sort({ score: -1 })
    res.json({ scores })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
})

//  @route  GET api/scores
//  @desc   Get all scores
//  @access Public

router.get('/scores', async (req, res) => {
  try {
    const scores = await Score.find().sort({
      createdAt: -1,
    })
    res.json({ scores })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
})

//  @route  POST api/scores
//  @desc   Get leaderboard aka top 10
//  @access Public

router.post(
  '/scores',
  [check('name', 'Name is required').not().isEmpty()],
  async (req, res) => {
    try {
      const { name, score } = req.body

      const newScore = new Score({ name, score })
      await newScore.save()
      res.status(200).json({ msg: 'Score inserted' })
    } catch (error) {
      console.error(error)
      res.status(500).send('Server error')
    }
  }
)

module.exports = router
