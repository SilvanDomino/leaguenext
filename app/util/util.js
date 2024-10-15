import { promises as fs } from 'fs';

export async function fetchMatch(){
    const file = await fs.readFile(process.cwd() + '/app/data/match.json', 'utf8');
    return JSON.parse(file);
}

export async function lzFetch(url){
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }