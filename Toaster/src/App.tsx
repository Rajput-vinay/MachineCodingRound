
import"./App.css"
import  Toaster  from "./Toaster"

import {useState} from "react"
export default function App (){
    const [notification, setNotification] = useState<{ id: number; message: string; type: string }[]>([])

    const addNotificationHandler = (message:string,type:string) =>{
        const id = getTime()
       
        setNotification((prevNotification) => 
          [...prevNotification, { id: id, message: message, type: type }]
        )

        setTimeout(()=>{
             deleteNotificationHandler(id)
        },5000)
        // console.log(notification)
    }


    const deleteNotificationHandler = (id:number) => {
        setNotification((prevNotification)=> [...prevNotification.filter((notification) => notification.id !==id)])

    }
    return (
        <div className="App">
           {
            notification.map((notification) =>(
                <Toaster 
                 key={notification.id}
                 message={notification.message}
                 type ={notification.type}
                 onclose={() => deleteNotificationHandler(notification.id)}
                />
            ))
           }

            <div className="container">
                <div className="content" onClick={() => addNotificationHandler("success", "success")}>Success</div>
                <div className="content" onClick={() => addNotificationHandler("info", "info")}>Info</div>
                <div className="content" onClick={() => addNotificationHandler("danger", "danger")}>Danger</div>
                <div className="content" onClick={() => addNotificationHandler("warning", "warning")}>Warning</div>
            </div>
        </div>
    )
}

function getTime(): number {
    return Date.now();
}
