//pages
var mainPage = document.querySelector('.main-content')
//left box & contents
var leftBox = document.querySelector('.radio-list')
var radioButtonSelected = document.querySelector('input[name="radio-bts"]:checked')
//right box & contents
var rightBox = document.querySelector('.image')
var cookPotImage = document.querySelector('.cook-pot')
var rightBoxAfterClick = document.querySelector('.group-tag-right')
var insertDishHere = document.querySelector('.randomized-dish-display')
var noneSelectedMes = document.querySelector('.none-selected-message')
var addedRecipeNotice = document.querySelector('.user-input-dish')
var userInputAddPage = document.querySelector('.user-input-dish-form')
//add new recipe form
var addRecipeForm = document.querySelector('.add-recipe-display')
//buttons
var letsCookButton = document.querySelector('.lets-cook-button')
var addRecipeButton = document.querySelector('.add-recipe-button')
var clearButton = document.querySelector('.clear-button')
var addNewButton = document.querySelector('.add-new-button')

// EVENT LISTENERS

letsCookButton.addEventListener('click', function(event) {
    event.preventDefault()
    showHideContent(rightBoxAfterClick, cookPotImage)
    generateRandomDish()
})

clearButton.addEventListener('click', function(event) {
    event.preventDefault()
    showHideContent(cookPotImage, rightBoxAfterClick)
})

addRecipeButton.addEventListener('click', function() {
    showContent(addRecipeForm)
})

addNewButton.addEventListener('click', function(event) {
    event.preventDefault
    addARecipe(event)
})

// FUNKY FUNCTIONS

function randomFood (array) {
    var indexPosition =  Math.floor(Math.random() * array.length)
    return array[indexPosition]
}

function showHideContent(show, hide) {
    show.classList.remove('hidden')
    hide.classList.add('hidden')
}

function showContent(show) {
    show.classList.remove('hidden')
}

function hideContent(hide) {
    hide.classList.add('hidden')
}

function generateRandomDish() {
    var rb1 = document.getElementById("rb1")
    var rb2 = document.getElementById("rb2")
    var rb3 = document.getElementById("rb3")
    var rb4 = document.getElementById("rb4")

    if(rb1.checked==true) {
        showHideContent(rightBoxAfterClick, cookPotImage)
        hideContent(noneSelectedMes)
        hideContent(userInputAddPage)
        insertDishHere.innerText = randomFood(Sides)
        rb1.checked = false
    } else if(rb2.checked==true) {
        showHideContent(rightBoxAfterClick, cookPotImage)
        hideContent(noneSelectedMes)
        hideContent(userInputAddPage)
        insertDishHere.innerText = randomFood(Mains)
        rb2.checked = false
    } else if(rb3.checked==true) {
        showHideContent(rightBoxAfterClick, cookPotImage)
        hideContent(noneSelectedMes)
        hideContent(userInputAddPage)
        insertDishHere.innerText = randomFood(Desserts)
        rb3.checked = false
    } else if(rb4.checked==true) {
        showHideContent(rightBoxAfterClick, cookPotImage)
        hideContent(noneSelectedMes)
        hideContent(userInputAddPage)
        insertDishHere.innerText = `${randomFood(Mains)} with a side of ${randomFood(Sides)} and ${randomFood(Desserts)} for dessert!`
        rb4.checked = false
    } else {
        hideContent(cookPotImage)
        hideContent(rightBoxAfterClick)
        hideContent(userInputAddPage)
        showContent(noneSelectedMes)
    }
}

function addARecipe(event) {
    var valueInput = document.getElementById("food-type-dd").value
    var userInput = document.getElementById('ar-actual').value
    
    if(valueInput === "none" || !userInput) {
        event.preventDefault()
        alert('Please select a Recipe Type or add Recipe Name!')
    } else if (valueInput === "side") {
        event.preventDefault()
        Sides.push(userInput)
        addedRecipeNotice.innerText = `${userInput} has been added to Side Dishes!`
        showContent(userInputAddPage)
        hideContent(cookPotImage)
        hideContent(rightBoxAfterClick)
        hideContent(addRecipeForm)
        hideContent(noneSelectedMes)
    } else if (valueInput === "main") {
        event.preventDefault()
        Mains.push(userInput)
        addedRecipeNotice.innerText = `${userInput} has been added to Main Dishes!`
        showContent(userInputAddPage)
        hideContent(cookPotImage)
        hideContent(rightBoxAfterClick)
        hideContent(addRecipeForm)
        hideContent(noneSelectedMes)
    } else if (valueInput === "dessert") {
        event.preventDefault()
        Desserts.push(userInput)
        addedRecipeNotice.innerText = `${userInput} has been added to Dessert Dishes!`
        showContent(userInputAddPage)
        hideContent(cookPotImage)
        hideContent(rightBoxAfterClick)
        hideContent(addRecipeForm)
        hideContent(noneSelectedMes)
    }

}
