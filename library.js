
class Track {

  constructor (title, rating, length){
    this.title = title
    this.rating = rating
    this.length = length
  }

}

class Playlist {

  constructor(name){
    this.name = name
    this.tracks = []
  }

  addTrack(title, rating, length){
    const track = new Track(title, rating, length)
    this.tracks.push(track)
  }

  overallRating(){
    let sum = 0
    tracks.forEach(function(track){
      sum += track.rating
    })
    let averageRating = sum/tracks.length
    return overallRating
  }

  totalDuration(){
    let totalDuration = 0
    this.tracks.forEach(function(track){
      totalDuration += track.length
    })
    return totalDuration
  }

}

class Library {
  constructor(name, creator){
    this.name = name
    this.creator = creator
    this.playlists = []
  }

  addPlaylist(name){
    const playlist = new Playlist(name)
    this.playlists.push(playlist)
  }

  addPlaylist(name, title, rating, duration){
    const playlist = new Playlist(name)
    playlist.addTrack(title, rating,duration)
    this.playlists.push(playlist)
  }

}

////////////////// PROGRAM /////////////////////////////

const oldies = new Library('oldies', 'Sidney')

oldies.addPlaylist('MJPlaylist',"this is it", 5 , 3.14)

console.log(oldies.playlists[0].totalDuration())