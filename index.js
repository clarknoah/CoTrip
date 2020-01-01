const express = require("express");
const app = express();
const path = require('path');

var port = process.env.PORT || 4000;


app.use('/', express.static(path.join(__dirname, './builds')));
app.use('/storybook', express.static(path.join(__dirname, './storybook-static')));


app.listen(port, ()=>{
  console.log(`Listening on ${port}`);
})
