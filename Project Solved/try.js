function funn(strt, end) {
    var arr = []
    var z = strt
    for (var i = 0; i <= (end - strt); i++) {
        arr[i] = z++;
    }
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {

        if ((arr[i] % 3 == 0) && (arr[i] % 5 == 0)) {
            console.log("FizzBuzz")
        }
        else if (arr[i] % 3 == 0) {
            console.log("Fizz")
        }
        else if (arr[i] % 5 == 0) {
            console.log("Buzz")
        }
        else {
            console.log(arr[i])
        }

    }


}


funn(2, 8)
function Palindrome(number) {
    var rem, temp, final = 0;
    number
    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }
    if (final == temp) {
        window.alert("The inputed number is Palindrome");
    }
    else {
        window.alert("The inputted number is not palindrome");
    }
}
Palindrome(123321);
Palindrome(12321);
Palindrome(123455);