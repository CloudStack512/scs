const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
