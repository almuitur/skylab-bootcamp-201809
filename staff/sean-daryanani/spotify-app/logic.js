const logic = {

    call(path) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', path)

            var token = 'BQCUFL6erujeqB_XsyRIvFf4fj6ePdENv9Ue0O0nRVOX3SNQg6c5OGFcd9HbBnsPL-WFkbxtWegoDRtqG1O25WQ3uSyISDIO1kletoc0VGmWqV3pMU2czoL0JcHIDLx6StVqKKzZj_b4luI'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchArtists(query) {
        if (typeof query !== 'string') throw TypeError(`${query} is not a string`)
        if(!query.trim().length) throw Error(`query is empty or blank`)
        return this.call('https://api.spotify.com/v1/search?type=artist&query=' + query)
    },

    listAlbums(id) {
        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if(!id.trim().length) throw Error(`query is empty or blank`)
        return this.call('https://api.spotify.com/v1/artists/' + id + '/albums')
    },

    listTracks(id) {
        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if(!id.trim().length) throw Error(`query is empty or blank`)
        return this.call('https://api.spotify.com/v1/albums/' + id + '/tracks')

    },

    listTrackInfo(id) {
        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if(!id.trim().length) throw Error(`query is empty or blank`)
        return this.call('https://api.spotify.com/v1/tracks/' + id)
    }
}