// We gonna call joke API  we get a random joke and then we pass that to a text to speech API and that will tell us the joke.

const button = document.getElementById("button");
const audioElement = document.getElementById("audio");



const speak = (textToSpeech)=>{
VoiceRSS.speech({
    key: 'c831aa146bf94ec68d8f04615df16287',
    src:  textToSpeech,
    hl: 'en-us',
    v: 'Linda',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
});
}



const tellJoke = async () => {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any?type=single';
	try {
		const response = await fetch(apiUrl); // Fetch request. The Responce variable will not be populated until it has some data fetched from our API
		const Joke = await response.json();// We are getting json from respose and we are turning that response into JSON object . And we pass that into our global variable. 
		const showJoke = Joke.joke
        speak(showJoke);
	} catch (error) { // Handles Error
		// Catch Error Here     
	}
}

button.addEventListener('click', tellJoke); // we click  and it runs new Quote

