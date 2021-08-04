const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const users = [];

app.set('view-enginge', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render(`index.ejs`, { name: 'Casey' });
});

app.get('/login', (req, res) => {
  res.render(`login.ejs`);
});

app.get('/register', (req, res) => {
  res.render(`register.ejs`, { name: 'Casey' });
});

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect('/');
  } catch (error) {
    res.redirect('/register');
  }
});

app.post('/register', (req, res) => {});

app.listen(3000);
