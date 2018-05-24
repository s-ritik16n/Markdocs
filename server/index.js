"use strict"
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import process from 'process';
import axios from 'axios';

const app = express();
app.set('port', 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.set('Accept', 'application/json');
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/authcallback", (req, res) => {
  const code = req.query.code;
  const state = req.query.state;
  new Promise(function(resolve, reject) {
    axios({
      method: 'post',
      url: 'https://github.com/login/oauth/access_token',
      headers: {'Accept': 'application/json'}
    })
    .then(function(response) {
      console.log(response.data);
      resolve(response.data);
    }).catch((err) => {
        reject(err);
    });
  }).then((val)=>{
    res.redirect('/');
  }).catch((err) => {
    console.log(err);
    res.redirect('/');
  });
});

app.listen(process.env.PORT || 8000, () => { console.log(`all eyes at ${process.env.PORT || 8000}`); })
