import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const key = process.env.API_KEY;
  const name = "seaz%20test%20acc";
  const tag = "EUW";
  fetch(getAccountUrl(name, tag, key))
  .then(response=>response.json())
  .then(data=>{
    const puuid = data.puuid;
    fetch(getMatchHistoryUrl(puuid, key))
    .then(response => response.json())
    .then(async data=>{
      fetch(getMatchUrl(data[0], key))
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
    })
  });

  

  return (
    <div className={styles.page}>
      
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
         'https://europe.api.riotgames.com/lol/match/v5/matches/EUW1_7136863878?api_key=RGAPI-31540a6d-b037-46cc-8fbf-43e51b9a3bee'
  return `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${key}`
}