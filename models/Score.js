const mongoose = require('mongoose')

const ScoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
})

module.exports = Score = mongoose.model('Score', ScoreSchema)
