import { Player } from "./Player"

export function Match({matchData}){


    return (
        <div>
            <h2>
                {matchData.info.gameName}
            </h2>
            <div className="players">
                {matchData.info.participants.map(player=>{
                    return <Player player={player}/>
                })}
            </div>
        
        </div>
    )
}