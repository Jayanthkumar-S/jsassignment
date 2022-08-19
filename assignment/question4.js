// Q4. Write a program to print the first non-repeated character from a string?



function Character(string) {
    for (var i = 0; i < string.length; i++) {
        var char = string.charAt(i);
        if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1) {
            return char;
        }
    }
    return null;
}

var String = 'jayanth';
console.log(Character(String));