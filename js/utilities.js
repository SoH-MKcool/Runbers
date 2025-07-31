export default class Utilities {

    isEqual(a, b) {
        return JSON.stringify(a) == JSON.stringify(b);
    }

    isNotEqual(a, b) {
        return JSON.stringify(a) != JSON.stringify(b);
    }

    opperations(a, b, c){
        if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'string') {
            throw new Error('First 2 parameters must be numbers and the 3rd a String');
        }

        if(c == "add" || c == "addition" || c == "+"){
            return a + b;
        } 
        else if (c == "sub" || c == "subtraction" || c == "-"){
            return a - b;
        }
        else if (c == "multiplication" || c == "*" || c == "x"){
            return a * b;
        }
        else if (c == "divide" || c == "division" || c == "/"){
            return a / b;
        }
        else{
            throw new Error('c is not a existing opperation');
        }
    }
}