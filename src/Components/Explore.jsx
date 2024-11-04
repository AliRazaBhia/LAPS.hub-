import React from 'react'
import Card from './Card'
import { data } from '../assets/data'
import BackToTop from './backToTop'
const Explore = () => {
  const sneakers = data.sneakers

  let filteredItems = sneakers.filter((s) =>  s.retail_price_cents !== 0 && s.story_html !==0 )

  let items =  filteredItems.map ((item) =>{  return {...item, qty:1 }})

  return (
    <div className='' >
      <div className= " overflow-x-hidden mt-10 w-full min-h-fit grid grid-cols-3 p-10 gap-x-10 gap-y-10">
        {items.map((shoe, idx) => <Card key={shoe.id} shoe={shoe}/>)}
      </div>
      <BackToTop/>
    </div>
  )
}

export default Explore