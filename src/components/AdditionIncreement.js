import React from 'react'
import { useDispatch } from 'react-redux'
import { scoreActions } from '../store/countStore'

function AdditionIncreement() {
    const dispatch = useDispatch()
    const  decrbyfive = ()=>{
        dispatch(scoreActions.decreement(5))
    }
  return (
    <div>
        <button onClick={decrbyfive}>DECRBY5</button>
    </div>
  )
}

export default AdditionIncreement