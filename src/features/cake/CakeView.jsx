import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restored } from './cakeSlice'

export default function CakeView() {
    const numOfCakes=useSelector((state)=>state.cake.numOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button onClick={e=>dispatch(ordered())}>Order cake</button>
        <button onClick={e=>dispatch(restored(1))}>Restore cake</button>
    </div>
  )
}

