import React from 'react';
import {
  Container,
} from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import ReactPlayer from 'react-player';
import NavBar from './components/nav';
import DisplayVideo from './sections/display';
import UploadSection from './sections/upload';

function App() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Switch>
          <Route path="/upload"><UploadSection /></Route>
          <Route path="/home">
            <DisplayVideo />
          </Route>
          <Route path="/video">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                controls
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
              />
            </div>
          </Route>
        </Switch>
      </Container>
    </>
  );
}

console.log(process.env.REACT_APP_API_BASE_URL);

export default App;
