import { Player } from "./Player"
import styles from './Match.module.css';
export function Match({matchData}){
    let match = matchData;
    generateMetadata(match);

    return (
        <div>
            <h2>
                {match.info.gameName}
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
                <div>
                    gold
                </div>
                <div>
                    gold %
                </div>
            </div>
            <div className={styles.players}>
                {match.info.participants.map(player=>{
                    return <Player player={player} key={player.puuid}/>
                })}
            </div>
        </div>
    )

    function generateMetadata(match){
        let totalGold = {100: 0, 200:0};
        match.info.participants.forEach(element => {
            totalGold[element.teamId] += element.goldEarned;
        });
        match.generated = {};
        match.generated.totalGold = totalGold;
        match.info.participants.forEach(element => {
            let total = totalGold[element.teamId];
            let percentage = element.goldEarned/total * 100;
            element.goldShare = parseFloat(percentage).toFixed(2);
        });
        return totalGold;
    }
}