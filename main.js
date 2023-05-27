
// website assets
var Sides = [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies",
]

var Mains = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"
]

var Desserts = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
]

//pages
var mainPage = document.querySelector('.main-content')
//left box & contents
var leftBox = document.querySelector('.list')
var letsCookButton = document.querySelector('.lets-cook')
//right box & contents
var rightBox = document.querySelector('.image')
var cookPotImage = document.querySelector('.cook-pot')
var rightBoxAfterClick = document.querySelector('.group-tag-right')
var clearButton = document.querySelector('.clear-button')
//buttons
var addRecipeB = document.querySelector('.ar')
var letsCookB = document.querySelector('.lets-cook')

// EVENT LISTENERS

letsCookButton.addEventListener('click', function(event) {
    event.preventDefault()
    showHide(rightBoxAfterClick, cookPotImage)
})

clearButton.addEventListener('click', function() {
    showHide(cookPotImage, rightBoxAfterClick)
})

// FUNKY FUNCTIONS

function showHide(show, hide) {
    show.classList.remove('hidden')
    hide.classList.add('hidden')
}