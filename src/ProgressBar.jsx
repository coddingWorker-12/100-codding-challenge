export default function ProgressBar({ispercent}){
    return(
        <div  style={{ width: "100vw",height:"20px", borderRadius:"5px"}}>
            <div style={{height:'100%', width:`${ispercent}%` ,backgroundColor:"green"}}></div>
            <div></div>

        </div>
    )
}