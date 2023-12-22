/* import "./style.css";

const URL = `https://www.balldontlie.io/api/v1/players`;

async function getData(URL) {
  try {
    const response = await fetch(URL);
  const data = await response.json()
  //document.getElementById("api-response").textContent = data.content
  console.log(data)
  //  document.querySelector("h1").textContent = data.content;
  //  document.querySelector("h2").textContent = data.author;
  } catch (error) {
    document.querySelector("h1").textContent = `Sorry I can't find`;
    console.log(error);
  }
}
getData(URL); */

/* const URL = `https://www.balldontlie.io/api/v1/players`;

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); // makSes the data into JSON object we can use 
   // document.getElementById("team-name").textContent = data.data.team.full_name;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getData(URL); */




const URL = `https://www.balldontlie.io/api/v1/players`;

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); // makSes the data into JSON object we can use 
    console.log(data);
    console.log(response);
    if (response.status != 200) {
      throw new Error(response.statusText)
    }
    let x = Array.from(data.data)
    for(let i=0; i<x.length; i++){
      console.log(x[i]);
    }
    console.log(reponse);
  } catch (error) {
    console.log(error);
  }
}
console.log(getData(URL));
