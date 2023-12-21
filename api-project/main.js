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

const URL = `https://www.balldontlie.io/api/v1/players`;

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
getData(URL);
