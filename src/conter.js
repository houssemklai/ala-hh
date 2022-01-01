import React from 'react'
import{ useDispatch, useSelector} from 'react-redux'
import{INCRUMENT} from './action'


function Conter() {
const  dispatch = useDispatch()
const x  = useSelector(state =>state.count )

    return (
        <div>
     <button onClick={()=>dispatch(INCRUMENT())}  >+ </button>
     <span>{x} </span>
     <button> - </button>
        </div>
    )
}

export default Conter ;
