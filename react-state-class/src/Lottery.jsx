import { useState } from "react";

import { genTicket,sum} from "./helper";
import Ticket from "./Ticket";


 
export default function Lottery({n=3,winCondition}){
    let [ticket,setTicket] =useState(genTicket(3));
    let isWinning = winCondition(ticket);
    let buyTicket =()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/>
            </div>
           <br /><br />
            
            <button onClick={buyTicket}>Buy Ticket</button>
            
            <h3>{isWinning&&" Congratulations, you won!"}</h3>
        </div>
    );
}
//Component types 
//logical presntational -> state variable props presentational  
//dumb presentational Ui they don't have no state
//App->lottery ->Ticket->Ticket Name -> TN ---