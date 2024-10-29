function isAnagram(s, t) {
    var map = new Map();
    var firstStringLength = s.length;
    for (var i = 0; i < firstStringLength; i++) {
        var currLetter = s[i];
        var isDuplicate = map.has(currLetter);
        if (isDuplicate) {
            var value = map.get(currLetter);
            if (!value) {
                map.set(currLetter, 1);
            }
            else {
                map.set(currLetter, value + 1);
            }
        }
        else {
            map.set(currLetter, 1);
        }
    }
    var secondStringLength = t.length;
    for (var j = 0; j < secondStringLength; j++) {
        var currLetter = t[j];
        var isDupe = map.has(currLetter);
        if (isDupe) {
            var value = map.get(currLetter);
            if (!value) {
                map.set(currLetter, 1);
            }
            else {
                map.set(currLetter, value - 1);
            }
        }
        else {
            map.set(currLetter, 1);
        }
    }
    var values = Array.from(map.values());
    for (var k = 0; k < values.length; k++) {
        var currVal = values[k];
        if (currVal !== 0) {
            return false;
        }
    }
    return true;
}
console.log(isAnagram("rat", "car"));
