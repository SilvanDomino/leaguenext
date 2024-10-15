
export function Player({player}){

    function kda(){
        return (
            `${player.kills}/${player.deaths}/${player.assists}`
        )
    }
    return (
        <div className="player">
            {player.championName}
            {kda()}
        </div>
    )
}