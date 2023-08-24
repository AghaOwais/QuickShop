const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('build'));
app.use(express.json());

const formSubmissions = [];
app.post('/api/contact', (req, res) => {
  const { username, Email, Message } = req.body;
  const submission = { username, Email, Message };
  formSubmissions.push(submission);
  res.json({ success: true }); 
});

app.get('/api/contact', (req, res) => {
  res.json(formSubmissions);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});