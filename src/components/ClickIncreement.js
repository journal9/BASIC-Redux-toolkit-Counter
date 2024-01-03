import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scoreActions } from '../store/countStore'

function ClickIncreement() {
    const {num , res} = useSelector((state)=>state.score)
    const dispatch = useDispatch()
    const handleIncr = ()=>{
        dispatch(scoreActions.increement())
    }

  return (
    <div>
        <div>{num}</div>
        <div>{res}</div>
        <div>
            <button onClick={handleIncr}>+1</button>
        </div>
    </div>
  )
}

export default ClickIncreement