import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super()
  }
  render() {
    const { name, date, time, number, id } = this.props;
    return (
      <article className='card'>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{time}</p>
        <p>Number of Guests: {number}</p>
        <button>Cancel</button>
      </article>
    )
  }
}
