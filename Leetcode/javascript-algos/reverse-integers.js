/* Given a signed 32 - bit integer x, return x with its digits reversed.If reversing x causes the value to go outside the signed 32 - bit integer range[-231, 231 - 1], then return 0. */

function reverseInteger(x) {
    if (x <= Math.pow(-2, 31) || x > (Math.pow(2, 31) - 1)) return 0;
    const str = x.toString();
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return Math.sign(x) * parseInt(result);
}

reverseInteger(-320);