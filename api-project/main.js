import "./style.css";

const URL = `GET https://www.balldontlie.io/api/v1/players`;

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response.statusText);
    }

  const data = await response.json()
    console.log(data);
    // document.querySelector("h1").textContent = data.content;
    //  document.querySelector("h2").textContent = data.author;
  } catch (error) {
    //document.querySelector("h1").textContent = `Sorry I can't find`;
  }
}
getData(URL);

/* const url = 'https://api-nba-v1.p.rapidapi.com/seasons';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4bc66e1851mshe2bf1b4555f2483p12d495jsn98f04df829a7',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
} */
