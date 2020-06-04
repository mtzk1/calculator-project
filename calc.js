function add(x,y) {
    return x+y;
}
function subtract(x,y) {
    return x-y;
}
function multiply(x,y) {
    return x*y;
}
function divide(x,y) {
    return x/y;
}
function operate(operator,no1,no2) {
    if (operator == "+") {
        return add(no1,no2);
    } else if (operator == "-") {
        return subtract(no1,no2);
    } else if (operator == "x") {
        return multiply(no1,no2);
    } else if (operator == "÷") {
        if (no2 == 0) {
            return "fuckyou";
        } else {
        return divide(no1,no2);
        }
    }
}
function identifyNumbers(array) {
    let length = array.length
    let element = ""
    let newArray = []
    var i
    for (i=0;i<length;i++) {
        if (isNaN(Number(array[i])) == false) {
            element += String(array[i]);
        } else if (array[i] == "+"||"="||"x"||"÷") {
            if (i == 0) {
                newArray.push(0);
                newArray.push(array[i]);
            } else {
                newArray.push(Number(element));
                newArray.push(array[i]);
                element = ""
            }
        }
    }
    newArray.push(Number(element));
    return newArray;
}

function displayStr(array) {
    let length = array.length;
    let str = String(array[0]);
    for (i=1;i<length;i++) {
        str += " "
        str += String(array[i])
    }
    return str
}
function updateDisplay() {
    displayString = displayStr(displayArray);
    document.getElementById("display").innerHTML = displayString;
    setTimeout(updateDisplay,100);
}
displayArray = [0];
displayString = displayStr(displayArray);
document.getElementById("display").innerHTML = displayString;

const but1 = document.querySelector("#one");
but1.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push(1);
        updateDisplay();
    } else {
        displayArray.push(1);
        updateDisplay();
    }
});
const but2 = document.querySelector("#two");
but2.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push(2);
        updateDisplay();
    } else {
        displayArray.push(2);
        updateDisplay();
    }
});
const but3 = document.querySelector("#thr");
but3.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push(3);
        updateDisplay();
    } else {
        displayArray.push(3);
        updateDisplay();
    }
});
const but4 = document.querySelector("#four");
but4.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push(4);
        updateDisplay();
    } else {
        displayArray.push(4);
        updateDisplay();
    }
});
const but5 = document.querySelector("#five");
but5.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push(5);
        updateDisplay();
    } else {
        displayArray.push(5);
        updateDisplay();
    }
});
const but6 = document.querySelector("#six");
but6.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push(6);
        updateDisplay();
    } else {
        displayArray.push(6);
        updateDisplay();
    }
});
const but7 = document.querySelector("#sev");
but7.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push(7);
        updateDisplay();
    } else {
        displayArray.push(7);
        updateDisplay();
    }
});
const but8 = document.querySelector("#eig");
but8.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push(8);
        updateDisplay();
    } else {
        displayArray.push(8);
        updateDisplay();
    }
});
const but9 = document.querySelector("#nine");
but9.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push(9);
        updateDisplay();
    } else {
        displayArray.push(9);
        updateDisplay();
    }
});
const but0 = document.querySelector("#zero");
but0.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push(0);
        updateDisplay();
    } else {
        displayArray.push(0);
        updateDisplay();
    }
});
const butcl = document.querySelector(".clear");
butcl.addEventListener("click", () => {
    displayArray = [0];
    displayString = "";
    document.getElementById("display").innerHTML = displayString;
    });
const butplus = document.querySelector(".add");
butplus.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push("+");
        updateDisplay();
    } else {
        displayArray.push("+");
        updateDisplay();
    }
});
const butminus = document.querySelector(".subtract");
butminus.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push("-");
        updateDisplay();
    } else {
        displayArray.push("-");
        updateDisplay();
    }
});
const butmult = document.querySelector(".multiply");
butmult.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push("x");
        updateDisplay();
    } else {
        displayArray.push("x");
        updateDisplay();
    }
});
const butdiv = document.querySelector(".divide");
butdiv.addEventListener("click", () => {
    if (displayArray[0]==0) {
        displayArray = []
        displayArray.push("÷");
        updateDisplay();
    } else {
        displayArray.push("÷");
        updateDisplay();
    }
});
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    let identified = identifyNumbers(displayArray);
    let ans = operate(identified[1],Number(identified[0]),Number(identified[2]));
    displayArray = [];
    displayArray.push(String(ans));
    updateDisplay;
})