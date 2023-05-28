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
//buttons
var addRecipeB = document.querySelector('.ar')
var letsCookB = document.querySelector('.lets-cook')

// EVENT LISTENERS

letsCookButton.addEventListener('click', function(event) {
    event.preventDefault()
    showHide(rightBoxAfterClick, cookPotImage)
    rbSelectedValue()
})

clearButton.addEventListener('click', function() {
    showHide(cookPotImage, rightBoxAfterClick)
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
        insertDishHere.innerText = randomFood(Sides)
        rb1.checked = false
    } else if(rb2.checked==true) {
        showHide(rightBoxAfterClick, cookPotImage)
        hide(noneSelectedMes)
        insertDishHere.innerText = randomFood(Mains)
        rb2.checked = false
    } else if(rb3.checked==true) {
        showHide(rightBoxAfterClick, cookPotImage)
        hide(noneSelectedMes)
        insertDishHere.innerText = randomFood(Desserts)
        rb3.checked = false
    } else if(rb4.checked==true) {
        showHide(rightBoxAfterClick, cookPotImage)
        hide(noneSelectedMes)
        insertDishHere.innerText = `${randomFood(Mains)} with a side of ${randomFood(Sides)} and ${randomFood(Desserts)} for dessert!`
        rb4.checked = false
    } else {
        hide(cookPotImage)
        hide(rightBoxAfterClick)
        show(noneSelectedMes)
    }
}
