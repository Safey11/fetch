//fetch

// fetch(url,{options})

fetchData()


async function fetchData(){

  try{
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

      const data = await response.json()
      console.log(data.weight);
      
      
      
  }
  catch(error){
    console.error(error);
  }



}
