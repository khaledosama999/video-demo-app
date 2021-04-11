require('dotenv').config();

require('express-async-errors');// as like, you sent error to next middleware
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const { loggerMiddleware } = require('./middleware');

const corsOpts = { origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] };
const app = express();

app.use(xss());
app.use(helmet());

app.use(cors(corsOpts));
app.use(loggerMiddleware);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(cookieParser());

// App main router prefixed by /apis as our current configuration forwards requests with prefix /apis to this app
const mainRouter = new express.Router();
app.use('/apis', mainRouter);

mainRouter.use('/healthcheck', require('./routes/healthcheck'));
require('./routes/video')(mainRouter);

module.exports = app;
