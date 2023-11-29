import React, { useEffect, useState } from 'react'
import ItemCrew from './Item'
import { useRouter } from 'next/router'
import {team} from '../../utils/Crew'

const CrewDetails = () => {

  const route = useRouter()
  const [data, setData] = useState(null)

  useEffect(() => {
    const { slug } = route.query    
    if(slug){
        const item = team.find(item => item.key === slug)
        if(item){
          setData(item)
          console.log('item', item)
        }
    }
}, [route])
  

  return (
    <ItemCrew info={data} />
  )
}

export default CrewDetails