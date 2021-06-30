const BASE_URL = "https://deckofcardsapi.com/api/deck"

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
    axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`).then(function(res){
        $(".btn").show()
        deck_id = res.data.deck_id
    })
})

$("#add-card").on("click", function(){
    axios.get(`${BASE_URL}/${deck_id}/draw/?count=1`).then(function(res){
        let rotation = Math.floor(Math.random() * 50) + 1
        $("#card-container").append(`<img src="${res.data.cards[0].image}">`).css("transform", `rotate(${rotation}deg)`)
        if(res.data.remaining == 0){
            $("#add-card").hide()
        }
    })
})

