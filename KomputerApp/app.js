const loanButton = document.getElementById("loanButton");
const balanceElement = document.getElementById("balance");

let bankBalance = 200;
balanceElement.innerHTML = "Balance " + bankBalance + " SEK";

loanButton.addEventListener("click", getLoan);

function getLoan() {    
    let loanAmount = prompt("How much money would you like to loan?", 100);
    let loanLimit = (bankBalance * 2);
    
    if (loanAmount <= loanLimit && loanAmount != 0) {
        alert("You have received a loan of " + loanAmount + " SEK" + 
        "\nYour current balance is " + (Number(bankBalance) + Number(loanAmount)) + " SEK");
        
        bankBalance = Number(bankBalance) + Number(loanAmount);
        balanceElement.innerHTML = "Balance " + bankBalance + " SEK";

        loanButton.disabled = true;
    } else {
        alert("You can't get a loan of that size");
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


const äppulElement = document.getElementById("äppul");
const dillElement = document.getElementById("dill");
const simsongElement = document.getElementById("simsong");
const åsusElement = document.getElementById("åsus");

function Computer(name, price, description, features, url) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.features = features;
    this.url = url;
}

const Äppul = new Computer(
    "Äppul Komputer", 
    1000,
    "This is a computer. Amazing, I know!",
    "• Has a screen" + '<br>' + "• Has a keyboard, too" + '<br>' + "• A battery that lasts 30 minutes",
    "https://assets.stickpng.com/thumbs/585466ce28fc2508128fec5e.png");

const Dill = new Computer(
    "Dill 5000x", 
    2500,
    "This would be a great Christmas gift to give to a toddler (they will be happy even if it is a brick!).",
    "• Is only a little broken" + '<br>' + "• Smells kinda funny" + '<br>' + "• Can be used as a coaster",
    "https://www.pngkey.com/png/full/314-3145216_broken-laptop-screen-liquid-crystal-display.png");

const Simsong = new Computer(
    "Simsong Universe", 
    4000,
    "This computer can do anything! Sit on it, and it becomes a cushy seat!",
    "• Turns on in 10 minutes or less" + '<br>' + "• Has a very modern dirt colour" + '<br>' + "• Very thin (might have been sat on)",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tatung-einstein-computer.png/1024px-Tatung-einstein-computer.png");

const Åsus = new Computer(
    "Åsüs WOW", 
    1300,
    "This baby will keep you warm during the winter, and the sound of the hardworking fan goes great with meditation.",
    "• The fan works sometimes" + '<br>' + "• Can be used as a heater" + '<br>' + "• Has a cool name",
    "https://img.pngio.com/the-pc-is-old-lady-at-computer-png-400_292.png");


äppulElement.innerHTML = Äppul.name + " " + Äppul.price + " SEK";
dillElement.innerHTML = Dill.name + " " + Dill.price + " SEK";
simsongElement.innerHTML = Simsong.name + " " + Simsong.price + " SEK";
åsusElement.innerHTML = Åsus.name + " " + Åsus.price + " SEK";


let computerFeaturesElement = document.getElementById("computerFeatures");
let infoHeader = document.getElementById("infoHeader");
let priceElement = document.getElementById("price"); 
let descriptionElement = document.getElementById("description"); 
let imageContainerElement = document.getElementById("imageContainer");
let imageElement = document.getElementById("image");
let infoSection = document.getElementById("infoSection");


// Adding the default elements in the laptop section and the info section
computerFeaturesElement.innerHTML = Äppul.features;
infoHeader.innerHTML = Äppul.name;
priceElement.innerHTML = Äppul.price + " SEK";
descriptionElement.innerHTML = Äppul.description;
imageElement.src = Äppul.url;

function selectComputer() {
    var select = document.getElementById("selectbox");
    select = select.options[select.selectedIndex];
    switch (select) {
        case äppul:
            computerFeaturesElement.innerHTML = Äppul.features;
            infoHeader.innerHTML = Äppul.name;
            priceElement.innerHTML = Äppul.price + " SEK";
            descriptionElement.innerHTML = Äppul.description;
            imageElement.src = Äppul.url;
            break;
        case dill: 
            computerFeaturesElement.innerHTML = Dill.features;
            infoHeader.innerHTML = Dill.name;
            priceElement.innerHTML = Dill.price + " SEK";
            descriptionElement.innerHTML = Dill.description;
            imageElement.src = Dill.url;
            break;
        case simsong: 
            computerFeaturesElement.innerHTML = Simsong.features;
            infoHeader.innerHTML = Simsong.name;
            priceElement.innerHTML = Simsong.price + " SEK";
            descriptionElement.innerHTML = Simsong.description;
            imageElement.src = Simsong.url;
            break;
        case åsus: 
            computerFeaturesElement.innerHTML = Åsus.features;
            infoHeader.innerHTML = Åsus.name;
            priceElement.innerHTML = Åsus.price + " SEK";
            descriptionElement.innerHTML = Åsus.description;
            imageElement.src = Åsus.url;
            break;
        default:
            break;
    }
}


const buyButton = document.getElementById("buyButton");

buyButton.addEventListener("click", buyComputer);

function buyComputer() {
    let price = priceElement.innerText.replace(/(SEK)/g, '').trim();
    if (Number(bankBalance) >= Number(price)) {
        alert("You are now the proud new owner of the " + infoHeader.innerText + "!");
        balanceElement.innerHTML = "Balance " + (Number(bankBalance) - Number(price)) + " SEK";
    } else {
        alert("You can't afford the " + infoHeader.innerText);
    }
}
