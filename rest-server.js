var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');

var app = express();

app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.disable('x-powered-by');

app.get('/api/patients', function (req, res) {
    res.status(200).json(
        [
            {
                "id": 0,
                "text": "aaa"
            },
            {
                "id": 1,
                "text": "bbb"
            },
            {
                "id": 2,
                "text": "ccc"
            }
        ]
    );
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            "message": err.message,
            "error": err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        "message": err.message,
        "error": err
    });
});


app.listen(3000, '0.0.0.0', function () {
    console.log('Listening on port 3000');
});