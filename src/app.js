require('dotenv').config();

require('express-async-errors');// as like, you sent error to next middleware
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const path = require('path');
const { loggerMiddleware, errorHandlerMiddleware: { notFound, handleError } } = require('./middleware');

const corsOpts = { origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] };
const app = express();

app.use(xss());
app.use(helmet());
app.use(cors(corsOpts));
app.use(loggerMiddleware);
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true, parameterLimit: 50000 }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../front-end/build')));

app.set('trust proxy', 1);
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 300, // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

// App main router prefixed by /apis as our current configuration forwards requests with prefix /apis to this app
const mainRouter = new express.Router();
app.use('/apis', mainRouter);

mainRouter.use('/healthcheck', require('./routes/healthcheck'));
require('./routes/video')(mainRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../front-end/build', 'index.html'));
});

app.use(handleError);
app.use(notFound);

module.exports = app;
