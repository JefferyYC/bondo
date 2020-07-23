const express =require ('express');
const app = express();
const mongoose = require ('mongoose');
const dotenv = require ('dotenv');

//Import Routes
const authRoute = require('./routes/auth');
const { request } = require('express');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () => console.log('Connected to DB!'));

//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/user', authRoute);

app.listen(5000, () => console.log('Server up and running'));