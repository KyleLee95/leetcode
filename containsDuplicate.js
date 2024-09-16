function containsDuplicate(nums) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var currNum = nums[i];
        var isDuplicate = map.has(currNum);
        if (isDuplicate) {
            return true;
        }
        else {
            map.set(currNum, currNum);
            continue;
        }
    }
    return false;
}
var nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
