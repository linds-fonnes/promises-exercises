const fave_num = 8
const BASE_URL = "http://numbersapi.com"

//1.
axios.get(`${BASE_URL}/${fave_num}?json`).then(response => {
    console.log(response.data)}).catch(error => console.log(error))

//2.
const multiple_nums = [88, 4, 111]

axios.get(`${BASE_URL}/${multiple_nums}?json`).then(response => {
    for ([key,value] of Object.entries(response.data)){
        $("body").append(`<p>${value}</p>`)
    }
}).catch(error => console.log(error))

//3.
let four_facts = []
for (let i = 0; i < 4; i++){
    four_facts.push(
        axios.get(`${BASE_URL}/${fave_num}?json`)
    ) 
}

Promise.all(four_facts).then(facts => {
    for(fact of facts){
        $("body").append(`<p>${fact.data.text}</p>`)
    }
})