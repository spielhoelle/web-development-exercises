import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import Picture from './Picture/Picture';
import './App.css';
import randomstring from 'randomstring';

class App extends Component {    
  
  state = {
    pictures: [
      {picsumId: 3, id: randomstring.generate(5)}
    ]
  }
  
  addImageHandler = () => {
    const newPic = {
      picsumId: Math.floor(Math.random() * 1000),
      id: randomstring.generate(5)
    };

    const pictures = [...this.state.pictures, newPic];
    this.setState({
      pictures: pictures
    })
  }

  removeImageHandler = (key) => {
    const picIndex = this.state.pictures.findIndex((pic) => {
      return key === pic.id;
    });

    const pictures = [...this.state.pictures];
    pictures.splice(picIndex, 1);

    this.setState({
      pictures: pictures
    });
  }

  changeImageHandler = (key) => {
    const picIndex = this.state.pictures.findIndex((pic) => {
      return key === pic.id;
    });

    const pictures = [...this.state.pictures];
    pictures[picIndex].picsumId = Math.floor(Math.random() * 1000);

    this.setState({
      pictures: pictures
    });
  }

  render() {

    const root = {
      marginTop: '15px'
    }


    return (
      <div style={root}>
        <Container>
          <Row>
            <h4>Another Picsum Example</h4>
          </Row>
          <Row>
            <Col xs="3">
              <Button onClick={this.addImageHandler} color="primary">New Image</Button>
            </Col>
            <Col xs="9">
              {this.state.pictures.map((p) => {
                return <Picture 
                        remove={() => {this.removeImageHandler(p.id)}} 
                        change={() => {this.changeImageHandler(p.id)}}
                        key={p.id} 
                        picsumId={p.picsumId} 
                        imageKey={p.id} />
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
