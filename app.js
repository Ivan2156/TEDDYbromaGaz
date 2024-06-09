let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let selectedItems = new Set();

const updateMainButton = () => {
    if (selectedItems.size > 0) {
        let itemList = Array.from(selectedItems).join(", ");
        tg.MainButton.setText(`Ви обрали такі товари: ${itemList}`);
        tg.MainButton.show();
    } else {
        tg.MainButton.hide();
    }
};

const handleButtonClick = (itemNumber) => {
    if (selectedItems.has(itemNumber)) {
        selectedItems.delete(itemNumber);
    } else {
        selectedItems.add(itemNumber);
    }
    updateMainButton();
};

document.getElementById("btn1").addEventListener("click", () => handleButtonClick("1"));
document.getElementById("btn2").addEventListener("click", () => handleButtonClick("2"));
document.getElementById("btn3").addEventListener("click", () => handleButtonClick("3"));
document.getElementById("btn4").addEventListener("click", () => handleButtonClick("4"));
document.getElementById("btn5").addEventListener("click", () => handleButtonClick("5"));
document.getElementById("btn6").addEventListener("click", () => handleButtonClick("6"));

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(Array.from(selectedItems).join(","));
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);
