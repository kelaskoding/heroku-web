const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello Heroku</h1>');
});
 
//default Heroku PORT
app.listen(process.env.PORT || 8080);