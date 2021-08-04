const express = require('express');
const app = express();

app.set('view-enginge', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render(`index.ejs`, { name: 'Casey' });
});

app.get('/login', (req, res) => {
  res.render(`login.ejs`);
});

app.post('/register', (req, res) => {});

app.get('/register', (req, res) => {
  res.render(`register.ejs`, { name: 'Casey' });
});

app.post('/register', (req, res) => {});

app.listen(3000);
