import React, { Component } from 'react';
import './App.css';
import Form from './Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    this.fetchReservations();
  }

  fetchReservations = () => {
    const url = 'http://localhost:3001/api/v1/reservations'
    return fetch(url) 
      .then(response => response.json())
      .then(result => console.log(result))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form />
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;

// create components to match comp
// quick style form
// quick style mock card
// fetch call in componentDidMount to get existing reservations
// 
//
