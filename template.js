/* const URL = `https://api-nba-v1.p.rapidapi.com/players/statistics`;

async function getData(URL){
    try {
      const response = await fetch(URL);
      console.log(response);
 //     if(response.status != 200){
 //           throw new Error(response.statusText);
        }
  //      console.log(response);
      const data = await response.json();
       console.log(data);
 //       document.querySelector("h1").textContent = data.content;
 //       document.querySelector("h2").textContent = data.author;
    } catch (error) {
  //      document.querySelector("h1").textContent = `Sorry I can't find ${pokemon}`;
    }

getData(URL); */ 

/* const axios = require("axios");

const options = {
  method: "GET",
  url: "https://api-nba-v1.p.rapidapi.com/seasons",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

try {
  const response = await response.json();
  console.log(response.data);
} catch (error) {
  console.error(error);
} */
const URL = `https://api-nba-v1.p.rapidapi.com/players?team=1&season=2022`;

async function getData(URL){
    try {
      const response = await fetch(URL);
        if(response.status != 200){
         throw new Error(response.statusText);
        }
   console.log(response);
      const data = await response.json();
       console.log(data);
    document.querySelector("h1").textContent = data.content;
     document.querySelector("h2").textContent = data.author;
    } catch (error) {
    document.querySelector("h1").textContent = `Sorry I can't find`;
    }
}
getData(URL);
