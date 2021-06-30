const BASE_URL = "https://deckofcardsapi.com/api/deck"
$(window).load(function(){
    sayHi()
})
function sayHi(){
    alert("HI")
}
//1 
axios.get(`${BASE_URL}/new/draw/?count=1`).then(response => {
    const { suit, value } = response.data.cards[0]
    console.log(`${value} of ${suit}`)
})

//2
axios.get(`${BASE_URL}/new/draw/?count=1`).then(response => {
    const deck_id = response.data.deck_id 
    first_card = response.data.cards[0]
    return axios.get(`${BASE_URL}/${deck_id}/draw/?count=1`)
}).then(response => {
    const second_card = response.data.cards[0];
    [first_card, second_card].forEach(function(card){
        console.log(`${card.value} of ${card.suit}`)
    })
})

//3
$(document).ready(function(){
    console.log("HI")
    axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`).then(function(res){
        console.log(res)
        $(".btn").show
        
    })
})

$.getJSON(`${BASE_URL}/new/shuffle/?deck_count=1`).then(function(res){
    console.log(res)
    $(".btn").show
    
}) 