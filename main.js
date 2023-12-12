

const openAdmision = () => {
    let container2 = document.getElementById("newExpense");
    let container = document.getElementById("newAdmision");
    container2.style.display= "none";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.backgroundColor = "rgb(218, 218, 218)";
    container.style.width = "375px";
    container.style.height = "375px";
    container.style.borderRadius = "15px";
    container.style.alignItems = "center";
}

const openExpense = () => {
    let container = document.getElementById("newAdmision");
    let container2 = document.getElementById("newExpense");
    container.style.display = "none";
    container2.style.display = "flex";
    container2.style.flexDirection = "column";
    container2.style.backgroundColor = "rgb(218, 218, 218)";
    container2.style.width = "375px";
    container2.style.height = "375px";
    container2.style.borderRadius = "15px";
    container2.style.alignItems = "center";
}

const admision = () => {
    let balance = parseFloat(localStorage.getItem("balance")) || 0; 
    let newIncome = parseFloat(document.getElementById("admissionAmount").value); 
    console.log(newIncome);
    balance += newIncome; 
    document.getElementById("admissionAmount").value = "";
    localStorage.setItem("balance", balance); 
    document.getElementById("balance").innerHTML = balance + "€";
    if (balance < 0) {
        document.getElementById("balance").style.color = "red";
    } else {
        document.getElementById("balance").style.color = "green";
    } 
}

const expense = () => {
    let title = document.getElementById("exName").value;
    let description = document.getElementById("exDesc").value;
    let date = document.getElementById("exDate").value; // Update ID here
    let coin = document.getElementById("exCoin").value;
    let balance = parseFloat(localStorage.getItem("balance")) || 0;
    let newExpense = parseFloat(document.getElementById("expenseAmount").value);

    balance -= newExpense;
    
    let newHistory = {
        name: title,
        desc: description,
        dt: date,
        coinB: coin,
        bl: balance
    }

    let array = JSON.parse(localStorage.getItem("historial")) || [];
    array.push(newHistory);
    localStorage.setItem("historial", JSON.stringify(array));
    console.log(newHistory);
    document.getElementById("expenseAmount").value = "";
    document.getElementById("adDesc").value = "";
    document.getElementById("adName").value = "";
    document.getElementById("exDate").value = "";
    localStorage.setItem("balance", balance);
    document.getElementById("balance").innerHTML = balance + "€";
    if (balance < 0) {
        document.getElementById("balance").style.color = "red";
    } else {
        document.getElementById("balance").style.color = "green";
    }
}

window.onload = function() {
    one(); 
};

const one = () => {
    let historial = JSON.parse(localStorage.getItem("historial")) || [];
    if (historial.length === 0) {
        localStorage.setItem("historial", JSON.stringify([]));
    }
    let balance = parseFloat(localStorage.getItem("balance")) || 0;
    document.getElementById("balance").innerHTML = balance + "€";
    if (balance < 0) {
        document.getElementById("balance").style.color = "red";
    } else {
        document.getElementById("balance").style.color = "green";
    }
}
