var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var contactsRouter = require('./routes/contact');
const colorBikeRouter = require('./routes/bicycle/colorBikes');
const sizeBikesRouter = require('./routes/bicycle/sizeBikes');
const materialBikesRouter = require('./routes/bicycle/materialBikes');
const typeBikesRouter = require('./routes/bicycle/typeBikes');
const genderUsersRouter = require('./routes/bicycle/genderUsers');
const wheelDiameterRouter = require('./routes/bicycle/wheelDiameterBikes');
const bikesRouter = require('./routes/bicycle/Bikes');
const rentsRouter = require('./routes/rent/rents');
const brandsRouter = require('./routes/bicycle/brands');
const dbConfig = require('./config/db');
const bodyParser = require('body-parser');

var app = express();
const mongoose = require('mongoose')
var cors = require('cors')
app.set(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/colorbike', colorBikeRouter);
app.use('/api/size_bike', sizeBikesRouter);
app.use('/api/material_bike', materialBikesRouter);
app.use('/api/type_bike', typeBikesRouter);
app.use('/api/gender_users_bike', genderUsersRouter);
app.use('/api/wheel_diameter', wheelDiameterRouter);
app.use('/api/bike', bikesRouter);
app.use('/api/rent', rentsRouter);
app.use('/api/brand', brandsRouter);
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/contact', contactsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

mongoose
    .connect(dbConfig.mongoDBUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        () => {
            console.log("Database connected");
        },
        (error) => {
            console.log("Database can't be connected: " + error);
        }
    );

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
