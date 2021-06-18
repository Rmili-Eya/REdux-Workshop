import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import decrease from '../actions/decrease'
import increase from '../actions/increase'
const PLusMoins = (props) => {
  const counter = useSelector(state=>state)
  const dispatch=useDispatch()
  return(
    <div>
    <h1>la valeur initiale est :{counter}</h1>
  <button onClick={()=>dispatch(increase())}>Increment</button>
  <button onClick={()=>dispatch(decrease())}>Decrement</button>

    </div>
   )

 }

export default PLusMoins