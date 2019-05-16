import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import CardContainer from './CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    this.fetchReservations()
      .then(reservations => this.setState({ reservations }))
      .catch(err => Error('Something went wrong', console.log(err)))
  }

  fetchReservations = () => {
    const url = 'http://localhost:3001/api/v1/reservations'
    return fetch(url) 
      .then(response => response.json())
      .catch(err => Error('Something went wrong', console.log(err)))

  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form />
        <CardContainer reservations={this.state.reservations}/>
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
