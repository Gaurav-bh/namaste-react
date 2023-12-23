import { useState } from "react"


const User = () => {
    const [count,setCount]=useState(0)
  return (
    <div className="user-detail">
        <h2>{count}</h2>
        <button onClick={()=>{
            setCount(count+1)

        }}>increase</button>
        <h2>Name :- Gaurav</h2>
        <h2>Location :- Hyderabad</h2>
        <h2>Contact :- bhardwajg556@gmail.com</h2>
    </div>
  )
}



export default User