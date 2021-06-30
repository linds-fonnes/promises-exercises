const BASE_URL = " https://pokeapi.co/api/v2/pokemon"
//1 
axios.get(`${BASE_URL}?limit=1118`).then(function(resp){
    all_pokemon = resp.data.results
})

//2
function randomNum(){
    return Math.floor(Math.random() * 1119)
}

axios.get(`${BASE_URL}?limit=1118`).then(function(resp){
    all_pokemon = resp.data.results
    return axios.get(all_pokemon[randomNum()].url)
}).then(function(resp){
    console.log(resp.data)
    return axios.get(all_pokemon[randomNum()].url)
}).then(function(resp){
    console.log(resp.data)
    return axios.get(all_pokemon[randomNum()].url)
}).then(function(resp){
    console.log(resp.data)
})

//3
function getEnglishText(data){
    for(entry of data){
        if(entry.language.name == "en"){
            return entry.flavor_text
        }
    }
}


$(".add-pkmn").on("click", function(){
    axios.get(`${BASE_URL}?limit=1118`).then(function(resp){
        all_pokemon = resp.data.results
        return axios.get(all_pokemon[randomNum()].url)
    }).then(function(resp){
         pokemon_img = resp.data.sprites.front_default
         pokemon_name = resp.data.name
         return axios.get(resp.data.species.url)
    }).then(function(resp){
        let description = getEnglishText(resp.data.flavor_text_entries)
        $(".card-container").append(`<div class="pkmn-card"><p>${pokemon_name}</p> <img src="${pokemon_img}"> <p> ${description}</p></div>`)
    })
})
