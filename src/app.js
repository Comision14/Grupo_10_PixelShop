var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product',productRouter)

// Rutas //
/*app.get('/',(req,res)=> res.sendFile(path.resolve(__dirname,"views","index.html")));
app.get('/login',(req,res)=> res.sendFile(path.resolve(__dirname,"views","login.html")));
app.get('/register',(req,res)=> res.sendFile(path.resolve(__dirname,"views","register.html")));
app.get('/productCart',(req,res)=> res.sendFile(path.resolve(__dirname,"views","productCart.html")));
app.get('/productDetail',(req,res)=> res.sendFile(path.resolve(__dirname,"views","productDetail.html")));
app.get('/formCrear',(req,res)=> res.sendFile(path.resolve(__dirname,"views","formCrear.html")));
app.get('/formEdit',(req,res)=> res.sendFile(path.resolve(__dirname,"views","formEdit.html")));*/

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
