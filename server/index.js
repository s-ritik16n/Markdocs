"use strict"
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
app.set('port', 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/authcallback", (req, res) => {
  console.log(res);
});

app.listen(app.get('port'), (port) => { console.log(`all eyes at ${app.get('port')}`); })
