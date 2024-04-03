function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x / y;
}

function openCalculator(){
    let operator = prompt("Enter the arithematic operation you want to perform:");

    while (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
        alert("Enter a valid arithematic operator");
        operator = prompt("Enter the arithematic operation you want to perform:");
    }

        let a = Number(prompt("Enter the first operand:"));
        while(isNaN(a)){
            alert("Enter a valid number");
            a = Number(prompt("Enter the first operand again:"));
        }

        let b = Number(prompt("Enter the second operand:"));
        while(isNaN(b)){
            alert("Enter a valid number");
            b = Number(prompt("Enter the second operand again:"));
        }
    
        let result;
        switch(operator){
            case '+':
                result = add(a,b);
                break;
            case '-':
                result = subtract(a,b);
                break;
            case '*':
                result = multiply(a,b);
                break;
            case '/':
                    while(b == 0){
                        alert("Divide by 0 is not supported");
                        b=Number(prompt("Enter the second operand again:"));
                    }
                result = divide(a,b);
        }
        console.log(result);
}