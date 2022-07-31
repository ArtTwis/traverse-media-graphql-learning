const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(
    `${process.env.MONGO_URI}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.bold);
};

module.exports = connectDB;
