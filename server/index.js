const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.on('error', (error) => console.error(error))
connection.once('open', () => console.log('Connected to Database'))


 const budgetsRouter = require('./routes/budgets');


 app.use('/budgets', budgetsRouter);
 

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});