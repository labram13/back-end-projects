var mongoose = require('mongoose')

let models = {};

console.log("connecting to mongodb")

async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://labradml_db_user:iWyc5BnM8zg0QNSN@cluster0.cqp624z.mongodb.net/tododb"
    );
    console.log("connected to todo db");
  } catch (err) {
    console.error("connection error:", err);
  }
}

connectToDB();

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

models.User = mongoose.model('User', userSchema);

const todoSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: String,
  description: String
})

models.Todo = mongoose.model('Todo', todoSchema);


console.log("successfully connected to mongodb")


module.exports = models;