const teamOneShootButton = document.querySelector ('#teamone-shoot-button') 
const teamtwoShootButton = document.querySelector ('#teamtwo-shoot-button')
const resetButton = document.querySelector ('#reset-button')
let numResets = document.querySelector('#num-resets')
let teamoneNumgoals = document.querySelector ('#teamone-numgoals')
let teamoneNumshoots = document.querySelector('#teamone-numshoots')
let teamtwoNumgoals = document.querySelector('#teamtwo-numgoals')
let teamtwoNumShoots = document.querySelector('#teamtwo-numshoots')

resetButton.addEventListener ("click", function() {
numResets = numResets + 1
teamoneNumshoots = teamoneNumshoots + 0
teamtwoNumShoots = teamtwoNumShoots + 0

console.log ('+ button clicked')

})
teamOneShootButton.addEventListener ("click", function() { 
    teamoneNumshoots = teamoneNumshoots + 1
    teamoneNumgoals = (math.random)

    console.log ('+ button1 clicked')
    
    })
 teamtwoShootButton.addEventListener ("click", function() {
     teamtwoNumShoots = teamtwoNumShoots + 1
     teamtwoNumgoals = (math.random)

        console.log ('+ button2 clicked')
        
        })    