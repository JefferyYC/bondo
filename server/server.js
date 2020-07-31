const express =require ('express');
const app = express();
const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
const cors = require('cors');


//Import Routes
const authRoute = require('./routes/auth');
const { request } = require('express');
const postRoute = require('./routes/posts');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser: true}, () => console.log('Conneced to DB!'))

//Bypass SOP
app.use(cors());

//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(5000, () => console.log('Server up and running'));