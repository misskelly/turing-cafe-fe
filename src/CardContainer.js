import React from 'react'
import Card from "./Card";

const CardContainer = (props) => {

    const resCards = props.reservations.map(res => {
      console.log(res)
      return (<Card {...res} />)
    }
      )
    return (
      <section className='card-container'>
        {resCards}
      </section>
    )
  }


  export default CardContainer;
