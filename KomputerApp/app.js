const loanButton = document.getElementById("loanButton");
const balanceElement = document.getElementById("balance");

let bankBalance = 200;
balanceElement.innerHTML = "Balance " + bankBalance + " SEK";

loanButton.addEventListener("click", getLoan);

// This function checks the bank balance to see if the loan request is valid, and if it is, 
// the amount the user entered in the prompt will be added to the bank balance
function getLoan() {    
    let loanAmount = prompt("How much money would you like to loan?", 100);
    let loanLimit = (bankBalance * 2);
    
    if (loanAmount <= loanLimit && loanAmount != 0 && loanAmount != null) {
        alert("You have received a loan of " + loanAmount + " SEK" + 
        "\nYour current balance is " + (Number(bankBalance) + Number(loanAmount)) + " SEK");
        
        bankBalance = Number(bankBalance) + Number(loanAmount);
        balanceElement.innerHTML = "Balance " + bankBalance + " SEK";

        // This turns of the option to take a loan when the user has done it once
        loanButton.disabled = true;
    } else {
        alert("Invalid request, please try again");
    }   
}


const bankButton = document.getElementById("bankButton");
const workButton = document.getElementById("workButton");
const salaryElement = document.getElementById("salary");

let salaryBalance = 0;
salaryElement.innerHTML = "Salary " + salaryBalance + " SEK";

workButton.addEventListener("click", workForMoney);

// This adds 100 "money" to the salary balance every time the user "works" ( = clicks the work button)
function workForMoney() {
    salaryBalance = Number(salaryBalance) + 100;
    salaryElement.innerHTML = "Salary " + salaryBalance + " SEK";
}

bankButton.addEventListener("click", transferToBank);

// This adds the accumulated salary balance to the bank balance (if it's more than 0), and then resets the salary balance 
function transferToBank() {
    if (salaryBalance === 0) {
        alert("You do not have any money to transfer");
    } else {
        bankBalance = Number(bankBalance) + Number(salaryBalance);
        balanceElement.innerHTML = "Balance " + bankBalance + " SEK";
        
        salaryBalance = 0;
        salaryElement.innerHTML = "Salary " + salaryBalance + " SEK";
    }
}


const äppulElement = document.getElementById("äppul");
const dillElement = document.getElementById("dill");
const simsongElement = document.getElementById("simsong");
const åsusElement = document.getElementById("åsus");

// The constructor for the Computers
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
    "This is a komputer. It will make all those mean kids at school think you're the coolest. Buy your peers' approval - TODAY!",
    "• Has a screen" + '<br>' + "• Has a keyboard, too" + '<br>' + "• Battery that lasts 30 minutes",
    "https://www.designbust.com/download/435/png/apple_old_mac_computer512.png");

const Dill = new Computer(
    "Dill 5000x", 
    2500,
    "This could be a great Christmas gift for a toddler - they would love the fabulous colours on the screen. It's like modern art!",
    "• Is only a little broken" + '<br>' + "• Very thin (has been sat on)" + '<br>' + "• Can be used as a coaster",
    "https://www.pngkey.com/png/full/314-3145216_broken-laptop-screen-liquid-crystal-display.png");

const Simsong = new Computer(
    "Simsong Universe", 
    4000,
    "This computer can do anything! Sit on it, and it becomes a cushy seat. Stand on it, and it's a handy-dandy step-stool. Amazing!",
    "• Turns on in 15 minutes or less" + '<br>' + "• Has a funky dirt-like colour" + '<br>' + "• Perfect as an extra seat",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tatung-einstein-computer.png/1024px-Tatung-einstein-computer.png");

const Åsus = new Computer(
    "Åsüs WOW", 
    1300,
    "This baby will keep you warm during the winter, and the sound of the struggling fan works great as white noise for meditation.",
    "• The fan works sometimes" + '<br>' + "• Can be used as a heater" + '<br>' + "• Has a cool name",
    "https://img.pngio.com/the-pc-is-old-lady-at-computer-png-400_292.png");


// This adds the names of the computers as options in the drop down menu
äppulElement.innerHTML = Äppul.name;
dillElement.innerHTML = Dill.name;
simsongElement.innerHTML = Simsong.name;
åsusElement.innerHTML = Åsus.name;


let computerFeaturesElement = document.getElementById("computerFeatures");
let infoHeader = document.getElementById("infoHeader");
let priceElement = document.getElementById("price"); 
let descriptionElement = document.getElementById("description"); 
let imageContainerElement = document.getElementById("imageContainer");
let imageElement = document.getElementById("image");
let infoSection = document.getElementById("infoSection");

// This adds the default elements in the laptop section and the info section (currently, default is Äppul)
computerFeaturesElement.innerHTML = Äppul.features;
infoHeader.innerHTML = Äppul.name;
priceElement.innerHTML = Äppul.price + " SEK";
descriptionElement.innerHTML = Äppul.description;
imageElement.src = Äppul.url;

// This updates the information available in the interface based on the user's choice in the drop down menu
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

// This controlls what happens when the user attempts to "buy" a computer, depending on the user's bank balance
// and the cost of the particular computer they have chosen
function buyComputer() {
    let price = priceElement.innerText.replace(/(SEK)/g, '').trim();
    if (Number(bankBalance) >= Number(price)) {
        alert("You are now the proud new owner of the " + infoHeader.innerText + "!");
        balanceElement.innerHTML = "Balance " + (Number(bankBalance) - Number(price)) + " SEK";
        bankBalance = Number(bankBalance) - Number(price);
    } else {
        alert("You cannot afford the " + infoHeader.innerText);
    }
}
