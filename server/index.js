"use strict"
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import process from 'process';
import axios from 'axios';
import config from './config';

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
  console.log("here is a log outside axios");
  axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token',
    headers: {'Accept': 'application/json'},
    data: {
      code: code,
      state: state,
      client_id: process.env.CLIENT_ID || config['CLIENT_ID'],
      client_secret: process.env.CLIENT_SECRET || config['CLIENT_SECRET']
    }
  })
  .then(function(response) {
    console.log("here i get the response - then");
    console.log(response.data);
    resolve(response.data);
    res.redirect('/');
  }).catch((err) => {
      console.log("here i get the response - error");
      reject(err);
      res.redirect('/');
    });
});

app.listen(process.env.PORT || 8000, () => { console.log(`all eyes at ${process.env.PORT || 8000}`); })
