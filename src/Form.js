import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
       name: '',
       date: '',
       time: '',
       guests: ''
    }
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }
  // handle submit
  
  render() {
    const { name, date, time, guests } = this.state;
      // const input = (type) => {
        //   return(
          //   <input 
          //     type='text'
          //     placeholder={type}
          //     name={`${type}`}
          //     value={{type}}
          //     // onChange={this.handleChange}
          //     />)
          // }
          // const { addRes } = this.props
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={this.handleChange}
            />
          <input 
            type='text'
            placeholder='Date (MM/DD)'
            name='date'
            value={date}
            onChange={this.handleChange}
            />
          <input 
            type='text'
            placeholder='Time'
            name='time'
            value={time}
            onChange={this.handleChange}
            />
          <input 
            type='number'
            placeholder='Number of Guests'
            name='guests'
            value={guests}
            onChange={this.handleChange}
            />
          <button type='submit' className='submit-btn'>
            Make Reservation
          </button>
        </form>
      </div>
    )
  }
}


