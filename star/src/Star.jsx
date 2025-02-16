import { useState } from "react"



function Star({starCount = 5}){
const [rating,setRating] = useState(-1)
const [hover, setHover] = useState(-1)

  const handlerClick = (index)=>{
    setRating(index)
  }

    let starArray = Array(starCount).fill()
    return (
           
        (
            starArray.map((_, index) =>{
                return (
                    <span 
                    key={index}
                    style={{
                        fontSize:"30px",
                        padding:"5px",
                        cursor:"pointer",
                        color: index <= rating || index <= hover ? "yellow": ""
                    }} 
                    onClick={()=> handlerClick(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(-1)}
                    >
                    ★
                    </span>
                )
            })
        )
    )
}

export default Star