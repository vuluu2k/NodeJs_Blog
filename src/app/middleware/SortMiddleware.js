module.exports = function (req, res, next) {
    res.locals._sort = {
        enable: false,
        type: 'default',
    };
    if (req) next();
};
