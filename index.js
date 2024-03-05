function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function percentage(btnVal){
    return 
}


document.addEventListener('DOMContentLoaded', function(){
    let btn = document.querySelectorAll('button');
    let outputField = document.getElementById('result');
    let firstNum = null;
    let secondNum = null; 
    let operator = null;
    let result = null;
    let flag = 0;
    

    btn.forEach((element) => {
        element.addEventListener('click', function(){
            let btnValue = element.textContent;
            let outputFieldInitialContent = outputField.textContent;

            if(btnValue != "-" && btnValue != "+" && btnValue != "/" && btnValue !="x" && btnValue != "AC" && btnValue != "+/-" && btnValue != "%" && btnValue != "="){
                if(outputFieldInitialContent.length < 10){
                    outputField.textContent = outputFieldInitialContent + btnValue;
                }

                if(flag == 1){
                    flag = 0;
                    outputField.textContent = btnValue;
                } else {
                    outputField.textContent = outputFieldInitialContent + btnValue;
                }
            }

            if(btnValue.includes("+")){
                if(firstNum == null){
                    firstNum = Number(outputFieldInitialContent);
                    operator = "+";
                    flag = 1;
                } 
            }

            if(btnValue.includes("-")){
                if(firstNum == null){
                    firstNum = Number(outputFieldInitialContent);
                    operator = "-";
                    flag = 1;
                }
            }

            if(btnValue.includes("x")){
                if(firstNum == null){
                    firstNum = Number(outputFieldInitialContent);
                    operator = "x";
                    flag = 1;
                }
            }

            if(btnValue.includes("/")){
                if(firstNum == null){
                    firstNum = Number(outputFieldInitialContent);
                    operator = "/";
                    flag = 1;
                }
            }

            if((btnValue.includes("=")) && operator == '+'){
                secondNum = Number(outputFieldInitialContent);
                outputField.textContent = add(firstNum, secondNum);
                flag = 1;
                firstNum = null;
                secondNum = null;
            }

            if((btnValue.includes("=")) && operator == '-'){
                secondNum = Number(outputFieldInitialContent);
                outputField.textContent = subtract(firstNum, secondNum);
                flag = 1;
                firstNum = null;
                secondNum = null;
            }

            if((btnValue.includes("=")) && operator == 'x'){
                secondNum = Number(outputFieldInitialContent);
                result = multiply(firstNum, secondNum);

                if(result % 1 != 0){
                    outputField.textContent = result.toFixed(6);
                } else {
                    outputField.textContent = result;
                }

                flag = 1;
                firstNum = null;
                secondNum = null;
            }

            if((btnValue.includes("=")) && operator == '/'){
                secondNum = Number(outputFieldInitialContent);
                result = divide(firstNum, secondNum);
 
                if(secondNum == 0){
                    outputField.textContent = "LMAO";
                } else {
                    if(result %1 != 0){
                        outputField.textContent = result.toFixed(6);
                    } else {
                        outputField.textContent = result;
                    }
                }

                flag = 1;
                firstNum = null;
                secondNum = null;
            }


            if(btnValue.includes("AC")){
                outputField.textContent = '';
            }

        });
    });
});
