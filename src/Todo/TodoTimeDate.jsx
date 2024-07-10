import { useEffect, useState } from "react"

const TodoTimeDate = () => {

    const [timeDate, setTimeDate] = useState("")
    
    useEffect(()=>{
        const interval =  setInterval(() => {
    
            const now = new Date();
            const currentDate = now.toLocaleDateString()
            const currentTime = now.toLocaleTimeString()
            setTimeDate(`${currentDate} - ${currentTime}`)
    
        }, 1000)
    },[])

    return (
        <>
            <h2> {timeDate}  </h2>

        </>
    )
}
export default TodoTimeDate