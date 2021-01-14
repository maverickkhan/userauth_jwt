const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//DB connection
mongoose.connect(process.env.DB_PASS,
{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`Database Connection up and running`)
})

//Import Routes
const authRoute = require('./routes/auth');
//Middlewares
app.use(express.json());
//Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log(`Server running at port 3000`));