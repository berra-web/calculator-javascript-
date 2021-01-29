function addToCalculator(value) {
    document.getElementById('displayResult').value += value;
    if(powFlag){
        let numbers =  document.getElementById('displayResult').value.split('^');
        document.getElementById('displayResult').value = Math.pow(numbers[0], numbers[1]);
        powFlag = false;
        console.log(numbers);
    }
}

function finilize() {
    //eval ==>> beräknar två värdet + - * / 
    console.log( document.getElementById('displayResult').value);
    document.getElementById('displayResult').value = eval( document.getElementById('displayResult').value);
}

function reset() {
    document.getElementById('displayResult').value = '';
}

let powFlag = false; // pow är false dvs när man trycker på pow knappen då ska inte funka den direkt
function mathCalculator(mathFunc){
    if(mathFunc == 'pow'){
        powFlag = true;
        document.getElementById('displayResult').value += '^';
    }else {
        let val = document.getElementById('displayResult').value;
        document.getElementById('displayResult').value = Math[mathFunc](val);
    }
};