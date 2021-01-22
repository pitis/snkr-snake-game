const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/snkr_io', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
