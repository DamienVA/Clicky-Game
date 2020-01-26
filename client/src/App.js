import React, { Component } from "react";
import {Container, Row, Col } from 'react-bootstrap';

import Thumbnail from './components/Thumbnail';
import Score from './components/Score';

// import './App.css';

class App extends Component {
  state = {
    tiles: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEdyVb4MXy3yEb5rvh1oTorHs_Ryrkz56BYyJSlKXfyiqQr45&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_QZnxlp_SyOMcZAv67bTDUzc-77UNApoUUm--GXP5ia5_Sfef&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu07pHun5w-9cMA-aLEAlKhi5TEin6pe-65uhuqmkhdrQu59M&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEtoSjhMjqoUOjVFiYd2HjvsFaFkxyAC2QJPXJNoesXRJFKOU_w&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfC1HY8k_8Y8zLGz-wkjhO80xBCt1nyXGBe8NRJmO8stYAi6ubaw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspjCQiXu-owwt6eKlD_KZGQYCv4o1JO5MItgU29Pu_3mvkQ7kBA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxPjQkLI3VwAIqdzvUikqdNBgrB2Jdcn7lcCu21Pzgmw6ovAN&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbK_LJwGQ1J2zwn7zNO6N0Bradsy_2J6fmUErfryPvUJtnjCs&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsku4c21lOI5QpecCrcSiqQeOfPfRmS9P01LZMJGaJuL_a-xs34w&s',
    ],

    score: 0,
    topScore: 0
  }
  
  clickedTiles = [];

  handleTileClick = (evt) => {

    const clickedTile = evt.target.src;

    if (this.clickedTiles.includes(clickedTile)) {
      this.clickedTiles.length = 0;
      this.setState({ score: 0});
      return;
    }

    const newScore = this.state.score + 1;
    const topScore = newScore > this.state.topScore ?
    newScore :
    this.state.topScore;

    this.clickedTiles.push(clickedTile);


    const shuffled = this.state.tiles.sort(() => 0.5 - Math.random());
    this.setState({
      tiles: shuffled,
      score: newScore,
      topScore: topScore
    });
  }

  render() {
    return (
      <div className="App">
        <Container className='mt-1' fluid={true}>
          <Row>
            <Col><Score score={this.state.score} topScore={this.state.topScore} /></Col>
          </Row>
          <Row className='mt-4'>
            <Col>
        {this.state.tiles.map((tile, idx) => 
        <Thumbnail
        src={tile}
        key={idx}
        onClick={this.handleTileClick}
        />)}</Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
