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
  const code = req.body.code;
  const state = req.body.state;
  try {
    axios({
      method: 'post',
      url: 'https://github.com/login/oauth/access_token',
      headers: {'Accept': 'application/json'},
      data: {
        code: code,
        state: state,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
      }
    })
    .then(function(response) {
      const access_token = response.data['access_token'];
      axios({
        method:'GET',
        url:'https://api.github.com/user?access_token='+access_token,
        headers: {'Accept': 'application/json'}
      }).then((response) => {
        console.log(`/user - ${response.data.login}`);
        axios({
          method: 'post',
          url: `https://api.github.com/users/${response.data.login}/repos?access_token=`+access_token,
          headers: {'Accept': 'application/json'}
        })
        .then((res) => {
          res.json({'success': true, 'res': res});
          res.end();
          return;
        })
        .catch((err) => {
          console.log(`error in POST /user/${response.data.login}/repos`);
          res.json({'success': false});
          res.end();
        })
      }).catch((err) => {
        console.log(`error in GET /user - ${err}`);
        res.json({'success': false});
        res.end();
      });
    });
  } catch (e) {
      console.log(`error in axios promise - ${e}`);
      res.redirect('/');
  }
});

app.listen(process.env.PORT || 8000, () => { console.log(`all eyes at ${process.env.PORT || 8000}`); })
