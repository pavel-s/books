const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const imageRouter = require('./routes/image');

const app = express();

// serve react app build files
app.use(express.static(path.resolve(__dirname, '../client/build')));

// image converter api route
app.get('/api/image/:image', imageRouter);

// react app route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
