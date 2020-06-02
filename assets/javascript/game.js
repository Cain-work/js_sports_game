const teamOneShootButton = document.querySelector ('#teamone-shoot-button') 
const teamtwoShootButton = document.querySelector ('#teamtwo-shoot-button')
const resetButton = document.querySelector ('#reset-button')
let numResets = document.querySelector('#num-resets')
let teamoneNumgoals = document.querySelector ('#teamone-numgoals')
let teamoneNumshots = document.querySelector('#teamone-numshots')
let teamtwoNumgoals = document.querySelector('#teamtwo-numgoals')
let teamtwoNumShots = document.querySelector('#teamtwo-numshots')

resetButton.addEventListener ("click", function() {

teamoneNumshots.innerHTML = 0
teamtwoNumShots.innerHTML = 0
teamoneNumgoals.innerHTML = 0
teamtwoNumgoals.innerHTML = 0
numResets.innerHTML = Number(numResets.innerHTML) + 1

console.log ('+ button clicked')

})
teamOneShootButton.addEventListener ("click", function() { 
    teamoneNumshots.innerHTML = Number(teamoneNumshots.innerHTML) + 1
    
    if (Math.random() * 100 < 80) {
        teamoneNumgoals.innerHTML = Number(teamoneNumgoals.innerHTML) + 1
        }
       
        
    console.log ('+ button1 clicked')
    
    })
 teamtwoShootButton.addEventListener ("click", function() {
     teamtwoNumShots.innerHTML = Number (teamtwoNumShots.innerHTML) + 1
     
     if (Math.random() * 100 < 80) {
        teamtwoNumgoals.innerHTML = Number(teamtwoNumgoals.innerHTML) + 1
        }
        
        console.log ('+ button2 clicked')
        
        })    