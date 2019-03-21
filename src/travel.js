import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";

class travel extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2d14.png"} className="App-logo" alt="logo" />
          <h1 className="App-title">My travel</h1>
        </header>
        <Quote
          country="Ivory Coast"
          destination="Abidjan"
          photo="https://photos.thechurchnews.com/file/ba2ad71838/dnews/galleryImageLarge/the-exterior-rendering-of-the-abidjan-cote-divoire-temple-which.jpg"
          distance="4 km"
        />
        <hr></hr>
        <Quote
          country="Nigeria"
          destination="Lagos"
          photo="https://d15gqlu8dfiqiu.cloudfront.net/s3fs-public/styles/banner/public/images/chapters/lagos.jpg"
          distance="4 km"
        />
      </div>
    );
  }
}

export default travel;
