const $artists = $('.artists')
const $albums = $('.albums')
const $tracks = $('.tracks')
const $trackInfo = $('.trackInfo')
const $audioTrack = $trackInfo.find('audio')
const $form = $('form')

view.hideEverything()

$form.submit(event => {
    event.preventDefault()

    view.hideEverything()

    view.soundPause()
    const $input = $form.find('input')

    const query = $input.val()

    logic.searchArtists(query)

        .then(artists => {
            var arr_artists = []
            arr_artists.push(...artists.artists.items)
            view.listArtist(arr_artists)
        })
        .catch(console.error)
}).bind(view)







