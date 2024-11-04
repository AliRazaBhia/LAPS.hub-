import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../assets/data'
import PreviewCard from './PreviewCard'
import './PreviewCard.css'

const Preview = (props) => {
    const {id} = useParams()
    const shoeid = Number(id)

    const sneakers = data.sneakers

    let filteredItems = sneakers.filter((s) =>  s.retail_price_cents !== 0 && s.story_html !==0 )
  
    let qtyUpdate =  filteredItems.map ((item) =>{  return {...item, qty:1 }})

    const item = qtyUpdate.filter((item)=> item.id === shoeid)
    const shoe = item[0]
  return (
    <PreviewCard shoe={shoe}/>
)
}

export default Preview