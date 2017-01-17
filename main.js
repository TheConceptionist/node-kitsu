var request = require("request");

exports.searchAnime = function(query, offset, callback) {
    request({
        method: 'GET',
        url: 'https://kitsu.io/api/edge/anime?filter[text]=' + query + '&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        }
    }, function(error, response, body) {
        if (error) {
            callback(error)
        }
        var allofit = JSON.parse(body)
        var results = allofit.data
        callback(null, results)
    })
}

exports.listAnime = function(offset, callback) {
    if (offset === null || offset === undefined) {
        offset = 0
    }
    request({
        method: 'GET',
        url: 'https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        }
    }, function(error, response, body) {
        if (error) {
            callback(error)
        }
        var allofit = JSON.parse(body)
        var results = allofit.data
        callback(null, results)
    })
}

exports.searchManga = function(query, offset, callback) {
    request({
        method: 'GET',
        url: 'https://kitsu.io/api/edge/manga?filter[text]=' + query + '&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        }
    }, function(error, response, body) {
        if (error) {
            callback(error)
        }
        var allofit = JSON.parse(body)
        var results = allofit.data
        callback(null, results)
    })
}

exports.listManga = function(offset, callback) {
    if (offset === null || offset === undefined) {
        offset = 0
    }
    request({
        method: 'GET',
        url: 'https://kitsu.io/api/edge/manga?page%5Blimit%5D=10&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        }
    }, function(error, response, body) {
        if (error) {
            callback(error)
        }
        var allofit = JSON.parse(body)
        var results = allofit.data
        callback(null, results)
    })
}

exports.searchDrama = function(query, offset, callback) {
    request({
        method: 'GET',
        url: 'https://kitsu.io/api/edge/drama?filter[text]=' + query + '&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        }
    }, function(error, response, body) {
        if (error) {
            callback(error)
        }
        var allofit = JSON.parse(body)
        var results = allofit.data
        callback(null, results)
    })
}

exports.listDrama = function(offset, callback) {
    if (offset === null || offset === undefined) {
        offset = 0
    }
    request({
        method: 'GET',
        url: 'https://kitsu.io/api/edge/drama?page%5Blimit%5D=10&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        }
    }, function(error, response, body) {
        if (error) {
            callback(error)
        }
        var allofit = JSON.parse(body)
        var results = allofit.data
        callback(null, results)
    })
}

exports.listUsers = function(offset, callback) {
    if (offset === null || offset === undefined) {
        offset = 0
    }
    request({
        method: 'GET',
        url: 'https://kitsu.io/api/edge/users?page%5Blimit%5D=10&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        }
    }, function(error, response, body) {
        if (error) {
            callback(error)
        }
        var allofit = JSON.parse(body)
        var results = allofit.data
        callback(null, results)
    })
}

exports.getUser = function(username, callback) {
    request({
        method: 'GET',
        url: 'https://kitsu.io/api/edge/users?filter[name]=' + username,
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        }
    }, function(error, response, body) {
        if (error) {
            callback(error)
        }
        var allofit = JSON.parse(body)
        var results = allofit.data
        callback(null, results)
    })
}

exports.listGenres = function(offset, callback) {
    if (offset === null || offset === undefined) {
        offset = 0
    }
    request({
        method: 'GET',
        url: 'https://kitsu.io/api/edge/genres?page%5Blimit%5D=10&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        }
    }, function(error, response, body) {
        if (error) {
            callback(error)
        }
        var allofit = JSON.parse(body)
        var results = allofit.data
        callback(null, results)
    })
}

exports.findCharacter = function(name, offset, callback) {
    if (offset === null || offset === undefined) {
        offset = 0
    }
    request({
        method: 'GET',
        url: 'https://kitsu.io/api/edge/characters?filter[name]=' + name + '&page%5Blimit%5D=10&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        }
    }, function(error, response, body) {
        if (error) {
            callback(error)
        }
        var allofit = JSON.parse(body)
        var results = allofit.data
        callback(null, results)
    })
}