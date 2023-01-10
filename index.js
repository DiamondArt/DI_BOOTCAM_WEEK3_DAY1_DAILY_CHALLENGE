/***********************************************************************************
 * Exercise Daily challenge :  Planets
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @typeof {object}
 * **********************************************************************************/ 
let listPlanets = document.getElementsByClassName("listPlanets")
const planets = [
  {
    "name": "Earth",
    "color": "#1f4b79",
    "moon": 1
   },
  {
    "name": "Mars",
    "color": "#f2b284",
    "moon": 2
   },
  {
    "name": "Jupiter",
    "color": "#bcaf99",
    "moon": 3
   },
    {
    "name": "Mercury",
    "color": "#8d8b90",
    "moon": 4
   },
  {
    "name": "Neptune",
    "color": "#93bef0",
    "moon": 3
   },
    {
    "name": "Saturn",
    "color": "#bda880",
    "moon": 4,
   },
   {
    "name": "Venus",
    "color": "#ebe9e3",
    "moon": 2
   },
   {
    "name": "Uranus",
    "color": "#d3e7f0",
    "moon": 1
   }
]
// for each planet, we create div to planet nam, color, and moon number  
planets.forEach(function(planet) {
    let div = document.createElement('div')
    let title = document.createElement('p')
    div.className = "planet";
    title.appendChild(document.createTextNode(planet.name))
    div.appendChild(title)
    div.style.background = planet.color;

    for(let i=0; i< planet.moon; i++) { //for each planet with append the moon item number
        let divMoon = document.createElement('div')
        divMoon.className = 'moon';
        divMoon.style.left =(i+1)+"rem" 
        div.appendChild(divMoon);
    }

    listPlanets[0].appendChild(div) // append planet to listPlanets
})