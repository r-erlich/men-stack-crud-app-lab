const express = require('express')
const mongoose = require('mongoose')


app.get('/', (req, res) => {
  res.send('Hello There!');
});

app.listen(3000);