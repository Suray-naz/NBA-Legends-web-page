import React from 'react'
import Cards from './Cards'
import data from "./../../helpers/data";

const Main = () => {
  return (
    <div className="container">
        {data.map ((card, index)=>(
            <Cards {...card} key={card.index}/>

        ))}

    </div>
  )
}

export default Main
