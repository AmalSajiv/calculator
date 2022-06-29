//1. display number in text box
function displayNum(num){
   result.value +=num
}

//2. clear content in text box
function clearBox(){
    result.value=""
}

//3. evaluate expression
function evaluateExpr(){
    result.value=eval(result.value)
}

//3. remove last item from text box
function removeItem(){
    curExp=result.value
    result.value=curExp.slice(0,-1)
}