import styles from './Player.module.css';
import clsx from 'clsx';
import Image from 'next/image';

export function Player({player}){

    function kda(){
        return (
            <div className={styles.kda}>
                {player.kills}/{player.deaths}/{player.assists}
            </div>
            
        )
    }
    return (
        <div className={
            clsx(
                styles.player,
                {
                    [styles.team100]: player.teamId === 100,
                    [styles.team200]: player.teamId === 200
                }
            )
        } style={{order: order()}}>
            <div className={styles.playerName}>
                {player.riotIdGameName}#{player.riotIdTagline}
            </div>
            <div className={styles.championName}>
                <Image src={`/img/champion/${player.championName}.png`} width={32} height={32}/>
            </div>
            {kda()}
            <div>
                {player.goldEarned}$
            </div>
            <div>
                {player.goldShare}%
            </div>
        </div>
    )

    /*team ID = 100 or 200
    position results this way in 0/1/2/3/4
    This code combines team and position to a order score.
    10/11/12/13/14 for team 1, 20/21/22/23/24 for team 2
    */
    function order(){
        let positions = ["TOP", "JUNGLE", "MIDDLE", "BOTTOM", "UTILITY"];
        return player.teamId/10+ positions.indexOf(player.teamPosition);;
    }
}