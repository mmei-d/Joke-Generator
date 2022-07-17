const btn = document.querySelector('#btn')
btn.addEventListener('click', genJoke)

async function genJoke() {
  const options = { 
    method: 'GET',
    headers: {
      Accept: "application/json"
    }
  }
  
  try{
    let data = await fetch('https://icanhazdadjoke.com/', options)
    let response = await data.json()
    document.querySelector('#joke-text').innerText = response.joke
  }catch(error){
    console.err(error)
  }
}