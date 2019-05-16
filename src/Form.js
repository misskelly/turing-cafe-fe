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
  // handleChange
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
        <form>
          <input 
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={this.handleChange}
            />
          <input 
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={this.handleChange}
            />
          <input 
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={this.handleChange}
            />
          <input 
            type='number'
            placeholder='Number of Guests'
            name='guests'
            value={guests}
            onChange={this.handleChange}
            />
          <button type='submit'>Make Reservation</button>
        </form>
      </div>
    )
  }
}


