import { Match } from "./Match/Match";
import styles from "./page.module.css";
import { fetchMatch } from "./util/util";
export default async function Home() {

  // const key = process.env.API_KEY;
  // const name = "seaz%20test%20acc";
  // const tag = "EUW";
  // const playerData = await lzFetch(getAccountUrl(name, tag, key));
  // const matchesRes = await lzFetch(getMatchHistoryUrl(playerData.puuid, key));
  // const match = await lzFetch(getMatchUrl(matchesRes[0], key));
  const match = await fetchMatch();
  // console.log(match);
  
  
  return (
    <div className={styles.page}>
      <Match matchData={match}/>
    </div>
  );
}




function getAccountUrl(name, tag, key){
  return `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}?api_key=${key}`
}
function getMatchHistoryUrl(puuid, key){
  return `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${key}`
}
function getMatchUrl(matchId, key){
  return `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${key}`
}