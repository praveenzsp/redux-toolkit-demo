import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restored } from './icecreamSlice'

export default function IcecreamView() {
    const numOfIcecreams=useSelector((state)=>state.icecream.numOfIcecreams)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>Number of Icecreams - {numOfIcecreams}</h2>
        <button onClick={e=>dispatch(ordered())}>Order Icecream</button>
        <button onClick={e=>dispatch(restored(1))}>Restore Icecream</button>
    </div>
  )
}

