import React from 'react'
import './app.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      searchResults: [{name: 'Sicko Mode', artist: 'Travis Scott', album: 'Astroworld', id: 1},
      {name: 'BILLIE ELISH.', artist: 'Armani White', album: 'BILLIE ELISH - Single', id: 2},
      {name: 'name3', artist: 'artist3', album: 'album3', id: 3}],
      playlistName: 'my playlist', 
      playlistTracks: [{name: 'Sicko Mode 1', artist: 'Travis Scott 21', album: 'Astroworld1', id: 4},
      {name: 'Sicko Mode 2', artist: 'Travis Scott 2', album: 'Astroworld2', id: 5}]
    } 
  }
  addTrack(track){
    let tracks = this.state.playlistTracks;
    if(tracks.find(saveTrack => saveTrack.id === track.id)){
      return
    }
  }
  render(){
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
        </div>
      </div>
    </div>
  )}
}

export default App