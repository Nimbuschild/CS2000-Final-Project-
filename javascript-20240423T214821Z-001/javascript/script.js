/* 
    Group members: Harleen Saini, Sekou Hera, Bibek
    File Name: Script.js
*/

//Global Variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Hamburger Menu Function
function menu() {
    var navlinks = document.getElementById("menu-links");
    var menuicon = document.getElementById("icon");
    if(navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#2a1f14";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#f6eee4";
    }
}

//Function to display the first answer
function ans1() {
    heading.style.display = "block";
    answer.textContent = "Certainly, EcoAlliance works as a non-profit organisation.";
}

//Function to display the second answer
function ans2() {
    heading.style.display = "block";
    answer.textContent = "Any business can sponsor our projects and in return, we advertise their businesses according to the plan they choose to sponsor us. To know about sponsorship plans you need to contact us, you can find our contact on Contact page. ";
}

//Function to display the third answer
function ans3() {
    heading.style.display = "block";
    answer.textContent = "Yes, volunteerng with EcoAlliance has many perks like receiving different kinds of awards, developing various interpersonal and working skills and volunteers at EcoAlliance are also given priority, when choosing permanent employees, if applicable. ";
}

//Function to display the fourth answer
function ans4() {
    heading.style.display = "block";
    answer.textContent = "EcoAlliance has been recognized on various platforms. The most recent on is that EcoAlliance has received the award of most active non-profit organization in America in 2023 by the Government of The USA.";
} 

//Function to display the fourth answer
function ans5() {
    heading.style.display = "block";
    answer.textContent = "We were only working for our country  until 2023 however, we are going to launch a new project in many countries namely Africa, India and Nepal this April.";
} 