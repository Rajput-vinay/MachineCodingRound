
interface notificationProps{
    id:number;
    message:string;
    type:string;
}

export default function Toaster({message, type,onclose}){

   console.log()
    return (
        <div className={`toaster ${type}`}>
            <div>{message}</div>
            <button onClick={onclose}>x</button>
        </div>
    )
}