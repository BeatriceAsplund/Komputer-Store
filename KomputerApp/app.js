const loanButton = document.getElementById("loanButton");
const balanceElement = document.getElementById("balance");

let bankBalance = 200;
balanceElement.innerHTML = "Balance " + bankBalance + " SEK";

loanButton.addEventListener("click", getLoan);

function getLoan() {    
    let loanAmount = prompt("How much money would you like to loan?", 100);
    let loanLimit = (bankBalance * 2);
    
    if (loanAmount <= loanLimit) {
        alert("You have received a loan of " + loanAmount + " SEK" + 
        "\nYour current balance is " + (Number(bankBalance) + Number(loanAmount)) + " SEK");
        
        bankBalance = Number(bankBalance) + Number(loanAmount);
        balanceElement.innerHTML = "Balance " + bankBalance + " SEK";

        loanButton.disabled = true;
    } else {
        alert("You cannot get a loan of that size");
    }    
}


const bankButton = document.getElementById("bankButton");
const workButton = document.getElementById("workButton");
const salaryElement = document.getElementById("salary");

let salaryBalance = 0;
salaryElement.innerHTML = "Salary " + salaryBalance + " SEK";

workButton.addEventListener("click", workForMoney);

function workForMoney() {
    salaryBalance = Number(salaryBalance) + 100;
    salaryElement.innerHTML = "Salary " + salaryBalance + " SEK";
}

bankButton.addEventListener("click", transferToBank);
function transferToBank() {
    if (salaryBalance === 0) {
        alert("You don't have any money to transfer");
    } else {
        bankBalance = Number(bankBalance) + Number(salaryBalance);
        balanceElement.innerHTML = "Balance " + bankBalance + " SEK";
        
        salaryBalance = Number(salaryBalance) - Number(salaryBalance);
        salaryElement.innerHTML = "Salary " + salaryBalance + " SEK";
    }
}


function myFunction() {
    document.getElementById("dropdownMenu").classList.toggle("show");
  }

window.onclick = function(event) {
    if (!event.target.matches('.dropButton')) {
        let dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


const äppulElement = document.getElementById("äppul");
const dillElement = document.getElementById("dill");
const simsongElement = document.getElementById("simsong");
const åsusElement = document.getElementById("åsus");

function Computer(name, price, description, features, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.features = features;
    this.image = image;
}

const Äppul = new Computer(
    "Äppul Komputer", 
    1000,
    "WOW",
    "WOOOOW",
    "image here later");

const Dill = new Computer(
    "Dill 5000x", 
    2500,
    "WOW",
    "WOOOOW",
    "image here later");

const Simsong = new Computer(
    "Simsong Universe", 
    4000,
    "WOW",
    "WOOOOW",
    "image here later");

const Åsus = new Computer(
    "Åsüs WOW", 
    1300,
    "WOW",
    "WOOOOW",
    "image here later");

äppulElement.innerHTML = Äppul.name + '<br>' + Äppul.price + " SEK";
dillElement.innerHTML = Dill.name + '<br>' + Dill.price + " SEK";
simsongElement.innerHTML = Simsong.name + '<br>' + Simsong.price + " SEK";
åsusElement.innerHTML = Åsus.name + '<br>' + Åsus.price + " SEK";


const computerFeaturesElement = document.getElementById("computerFeatures");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownMenu.addEventListener("click", chooseComputer);
let choice = dropdownMenu;

function chooseComputer() {
    switch(choice) {
        case Äppul:
            computerFeaturesElement.innerHTML = Äppul.features;
            break;
        case Dill:
            computerFeaturesElement.innerHTML = Dill.features;
            break; 
        case Simsong:
            computerFeaturesElement.innerHTML = Simsong.features;
            break; 
        case Åsus:
            computerFeaturesElement.innerHTML = Åsus.features;
            break;    
        default:
            break;                   
    }
}