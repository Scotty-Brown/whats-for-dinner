//pages
var mainPage = document.querySelector('.main-content')
//left box & contents
var leftBox = document.querySelector('.list')
var letsCookButton = document.querySelector('.lets-cook')
var radioButtonSelected = document.querySelector('input[name="radio-bts"]:checked')
//right box & contents
var rightBox = document.querySelector('.image')
var cookPotImage = document.querySelector('.cook-pot')
var rightBoxAfterClick = document.querySelector('.group-tag-right')
var insertDishHere = document.querySelector('.desc-of-dish')
var clearButton = document.querySelector('.clear-button')
var noneSelectedMes = document.querySelector('.none-selected-message')
var addedRecipeNotice = document.querySelector('.user-input-dish')
var userInputAddPage = document.querySelector('.user-input-added')
//add new recipe
var addRecipeForm = document.querySelector('.add-recipe-display')
//buttons
var addRecipeB = document.querySelector('.add-recipe-b')
var letsCookB = document.querySelector('.lets-cook')
var addNew = document.querySelector('.add')

// EVENT LISTENERS

letsCookButton.addEventListener('click', function(event) {
    event.preventDefault()
    showHide(rightBoxAfterClick, cookPotImage)
    rbSelectedValue()
})

clearButton.addEventListener('click', function(event) {
    event.preventDefault()
    showHide(cookPotImage, rightBoxAfterClick)
})

addRecipeB.addEventListener('click', function() {
    show(addRecipeForm)
})

addNew.addEventListener('click', function(event) {
    event.preventDefault
    dropDownSelection(event)
    // hide(cookPotImage)
    // hide(rightBoxAfterClick)
})

// FUNKY FUNCTIONS

function showHide(show, hide) {
    show.classList.remove('hidden')
    hide.classList.add('hidden')
    
}

function show(show) {
    show.classList.remove('hidden')
}

function hide(hide) {
    hide.classList.add('hidden')
}

function randomFood (array) {
    var indexPosition =  Math.floor(Math.random() * array.length)
    return array[indexPosition]
}

function rbSelectedValue() {
    var rb1 = document.getElementById("rb1")
    var rb2 = document.getElementById("rb2")
    var rb3 = document.getElementById("rb3")
    var rb4 = document.getElementById("rb4")

    if(rb1.checked==true) {
        showHide(rightBoxAfterClick, cookPotImage)
        hide(noneSelectedMes)
        hide(userInputAddPage)
        insertDishHere.innerText = randomFood(Sides)
        rb1.checked = false
    } else if(rb2.checked==true) {
        showHide(rightBoxAfterClick, cookPotImage)
        hide(noneSelectedMes)
        hide(userInputAddPage)
        insertDishHere.innerText = randomFood(Mains)
        rb2.checked = false
    } else if(rb3.checked==true) {
        showHide(rightBoxAfterClick, cookPotImage)
        hide(noneSelectedMes)
        hide(userInputAddPage)
        insertDishHere.innerText = randomFood(Desserts)
        rb3.checked = false
    } else if(rb4.checked==true) {
        showHide(rightBoxAfterClick, cookPotImage)
        hide(noneSelectedMes)
        hide(userInputAddPage)
        insertDishHere.innerText = `${randomFood(Mains)} with a side of ${randomFood(Sides)} and ${randomFood(Desserts)} for dessert!`
        rb4.checked = false
    } else {
        hide(cookPotImage)
        hide(rightBoxAfterClick)
        hide(userInputAddPage)
        show(noneSelectedMes)
    }
}

function dropDownSelection (event) {
    var valueInput = document.getElementById("food-type-dd").value
    var userInput = document.getElementById('ar-actual').value

    if(valueInput === "none") {
        event.preventDefault()
        alert('Please select a Recipe Type!')
    } else if (valueInput === "side") {
        event.preventDefault()
        Sides.push(userInput)
        addedRecipeNotice.innerText = `${userInput} has been added to Side Dishes!`
        show(userInputAddPage)
        hide(cookPotImage)
        hide(rightBoxAfterClick)
        hide(addRecipeForm)
        hide(noneSelectedMes)
    } else if (valueInput === "main") {
        event.preventDefault()
        Mains.push(userInput)
        addedRecipeNotice.innerText = `${userInput} has been added to Main Dishes!`
        show(userInputAddPage)
        hide(cookPotImage)
        hide(rightBoxAfterClick)
        hide(addRecipeForm)
        hide(noneSelectedMes)
    } else if (valueInput === "dessert") {
        event.preventDefault()
        Desserts.push(userInput)
        addedRecipeNotice.innerText = `${userInput} has been added to Dessert Dishes!`
        show(userInputAddPage)
        hide(cookPotImage)
        hide(rightBoxAfterClick)
        hide(addRecipeForm)
        hide(noneSelectedMes)
    }
}
