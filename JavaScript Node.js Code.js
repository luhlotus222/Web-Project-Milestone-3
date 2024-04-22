const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Contact Page. Website Project.html');
});
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  
  console.log('Received form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  res.send('Your message has been received succsessfully! Thank You!');
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
