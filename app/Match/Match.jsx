import { Player } from "./Player"
import styles from './Match.module.css';
export function Match({matchData}){

    return (
        <div>
            <h2>
                {matchData.info.gameName}
            </h2>
            <div className={styles.matchHeader}>
                <div>
                    name
                </div>
                <div>
                    champ
                </div>
                <div>
                    kda
                </div>
            </div>
            <div className={styles.players}>
                {matchData.info.participants.map(player=>{
                    return <Player player={player} key={player.puuid}/>
                })}
            </div>
        
        </div>
    )
}