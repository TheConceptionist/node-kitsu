var request = require("request");

//0.4 => 1.0, thanks to the guy that pointed it out on GitHub

exports.searchAnime = function(query, offset) {
    return new Promise(function(resolve, reject) {
        request({
            method: 'GET',
            url: 'https://kitsu.io/api/edge/anime?filter[text]=' + query + '&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            }
        }, function(error, response, body) {
            if (error) {
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}

exports.listAnime = function(offset) {
    return new Promise(function(resolve, reject) {
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
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}

exports.searchManga = function(query, offset) {
    return new Promise(function(resolve, reject) {
        request({
            method: 'GET',
            url: 'https://kitsu.io/api/edge/manga?filter[text]=' + query + '&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            }
        }, function(error, response, body) {
            if (error) {
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}

exports.listManga = function(offset) {
    return new Promise(function(resolve, reject) {
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
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}

exports.searchDrama = function(query, offset) {
    return new Promise(function(resolve, reject) {
        request({
            method: 'GET',
            url: 'https://kitsu.io/api/edge/drama?filter[text]=' + query + '&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            }
        }, function(error, response, body) {
            if (error) {
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}

exports.listDrama = function(offset) {
    return new Promise(function(resolve, reject) {
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
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}

exports.listUsers = function(offset) {
    return new Promise(function(resolve, reject) {
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
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}

exports.getUser = function(username) {
    return new Promise(function(resolve, reject) {
        request({
            method: 'GET',
            url: 'https://kitsu.io/api/edge/users?filter[name]=' + username,
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            }
        }, function(error, response, body) {
            if (error) {
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}

exports.listGenres = function(offset) {
    return new Promise(function(resolve, reject) {
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
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}

exports.findCharacter = function(name, offset) {
    return new Promise(function(resolve, reject) {
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
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}