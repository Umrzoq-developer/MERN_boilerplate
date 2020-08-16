const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose
  .connect(
    "mongodb+srv://Umrzoq:U8577840@umrzoq.veqpp.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));


app.get('/', (req, res) => {
    console.log('hello I am working!');
});



app.listen(5000);