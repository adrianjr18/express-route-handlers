// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');

const app = express();
app.use(express.json());

// Your code here
app.get('/artists/latest/albums', (req, res) => {
  // Your data to be sent in the JSON response
  const latestAlbum = getAlbumsForLatestArtist();
  // Sending JSON response
  res.status(200).json(latestAlbum);

});

app.get('/artists/latest', (req, res) => {
  // Your data to be sent in the JSON response
  //const latestArtist = getLatestArtist();
  // Sending JSON response
  res.json(getLatestArtist());

});

app.get('/artists/:artistId', (req, res) => {
  // Your data to be sent in the JSON response
  const { artistId } = req.params;
  const artist = getArtistByArtistId(artistId);
  // Sending JSON response
  res.status(200).json(artist);

});

app.post('/artists', function(req, res) {
  const name = req.body;
  const newArtist = addArtist(name);
  res.status(201).json(newArtist);
});

app.get('/artists', (req, res) => {
  // Your data to be sent in the JSON response
  const artists = getAllArtists();
  // Sending JSON response
  res.status(200).json(artists);

});


app.put('/artists/:artistId', function(req, res) {
  const { artistId } = req.params;
  const data = req.body;
  const update = editArtistByArtistId(artistId, data);
  const artist = getArtistByArtistId(artistId);
  res.status(200).json(update);
});




// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
