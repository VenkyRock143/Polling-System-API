const express = require('express');
const app = express();
const port = 4000;
const connectDB = require('./config/mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connecting mongodb database to server
connectDB();

app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function (err) {
    if (err) {
        console.log(`error in connecting to server on port:${port}`)
    }
    console.log(`connected to server successfully at port:${port}`)
})
