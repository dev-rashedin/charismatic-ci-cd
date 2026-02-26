const express = require('express');
const cors = require('cors');
const { notFoundHandler, globalErrorHandler } = require('./node_modules/.pnpm/express-error-toolkit@1.2.1/node_modules/express-error-toolkit/dist/index.d.cts');
const { StatusCodes } = require('./node_modules/.pnpm/http-status-toolkit@2.0.0/node_modules/http-status-toolkit/dist/index.d.cts');

const app = express();

// cors and body parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home route
app.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Server is running',
  });
});



// not found handler and global error handler
app.use(notFoundHandler);
app.use(globalErrorHandler);

module.exports = app;
