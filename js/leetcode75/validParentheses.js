var isValid = function (string) {
    var stack = [];
    var stringArr = string.split("");
    var pairs = new Map();
    pairs.set("}", "{");
    pairs.set(")", "(");
    pairs.set("]", "[");
    //iterate over the array
    for (var i = 0; i < stringArr.length; i++) {
        var currChar = stringArr[i];
        if (currChar === "(" || currChar === "[" || currChar === "(") {
            stack.unshift(currChar);
            continue;
        }
        var matchingChar = pairs.get(currChar);
        var topOfStack = stack.shift();
        var isMatching = topOfStack === matchingChar;
        if (isMatching) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
};
var test = isValid("()[]{}");
console.log(test);
