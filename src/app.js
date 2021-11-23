const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const asusRouter = require('./routes/asus');
const dellRouter = require('./routes/dell');
const detailRouter = require('./routes/detail');
const productRouter = require('./routes/api/product');
const orderRouter = require('./routes/api/order');
const orderDetailRouter = require('./routes/api/OrderDetail');
const customerRouter = require('./routes/api/customer');
const staffRouter = require('./routes/api/staff');
const accountRouter = require('./routes/api/account');

const db = require('./config/database');

db.connect();
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/asus', asusRouter);
app.use('/dell', dellRouter);
app.use('/detail', detailRouter);
app.use('/users', usersRouter);

app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);
app.use('/api/order_detail', orderDetailRouter);
app.use('/api/customer', customerRouter);
app.use('/api/staff', staffRouter);
app.use('/api/account', accountRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
