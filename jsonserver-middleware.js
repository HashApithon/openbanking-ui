module.exports = function (req, res, next) {
    //configure post urls here for json-server or any other put or patch
    if (req.method === 'POST' && req.originalUrl === '/token') {
        return res.jsonp({
            "access_token": "Njugff123Ahejkf8hbkkjjh",
            "refresh_token": "1245-hdh6-g5s8b=bdddd"
        })
    }
    next()
}