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

app.get('/artists/:artistId/albums', (req, res) => {
  // Your data to be sent in the JSON response
  const { artistId } = req.params;
  const albums = getAlbumsByArtistId(artistId);
  // Sending JSON response
  res.json(albums);

});

app.get('/artists/latest', (req, res) => {
  res.json(getLatestArtist());

});

app.put('/artists/:artistId', function(req, res) {
  const { artistId } = req.params;
  const data = req.body;
  const update = editArtistByArtistId(artistId, data);
  res.json(update);
});

app.patch('/artists/:artistId', function(req, res) {
  const { artistId } = req.params;
  const data = req.body;
  const update = editArtistByArtistId(artistId, data);
  res.json(update);
});

app.delete('/artists/:artistId', function(req, res) {
  const { artistId } = req.params;
  deleteArtistByArtistId(artistId);
  const message = {message: 'Successfully deleted'};
  res.send(message);
});

app.get('/artists/:artistId', (req, res) => {
  // Your data to be sent in the JSON response
  const { artistId } = req.params;
  const artist = getArtistByArtistId(artistId);
  // Sending JSON response
  res.status(200).json(artist);

});

app.post('/artists/:artistId/albums', function(req, res) {
  const { artistId } = req.params;
  const name = req.body;
  const newAlbum = addAlbumByArtistId(artistId, name);
  res.status(201).json(newAlbum);
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

app.delete('/albums/:albumId', function(req, res) {
  const { albumId } = req.params;
  deleteAlbumByAlbumId(albumId);
  const message = {message: 'Successfully deleted'};
  res.send(message);
});

app.post('/albums/:albumId/songs', function(req, res) {
  const { albumId } = req.params;
  const data = req.body;
  const newSong = addSongByAlbumId(albumId, data);
  res.status(201).json(newSong);
});

app.put('/albums/:albumId', function(req, res) {
  const { albumId } = req.params;
  const data = req.body;
  const updatedAlbum = editAlbumByAlbumId(albumId, data);
  res.json(updatedAlbum);
});

app.patch('/albums/:albumId', function(req, res) {
  const { albumId } = req.params;
  const data = req.body;
  const updatedAlbum = editAlbumByAlbumId(albumId, data);
  res.json(updatedAlbum);
});



// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
