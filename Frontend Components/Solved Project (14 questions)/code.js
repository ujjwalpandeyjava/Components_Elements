// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["", ""]


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
    [
        {
            firstName: "",
            lastName: ""
        }
    ]

//Base random generator function.
function randomGenerator(min, max) {
    var rand = Math.floor(parseInt(Math.random() * (max - min + 1)) + parseInt(min))
    return rand;
}
// Returns a random number between 1-100
function fun1() {
    var a = randomGenerator(1, 100)
    document.getElementById("p1").innerHTML = a;
}
// Returns a random number between "Start" and "End"
function fun2() {
    var minN = document.getElementById("min").value
    var maxN = document.getElementById("max").value
    var a = randomGenerator(minN, maxN)
    document.getElementById("p2").innerHTML = a;
    if (minN == "" || maxN == "") {
        document.getElementById("p2").innerHTML = "Please fill those textboxes.";
    }
}

//Returns a long Lorem Ipsum String
function fun3() {
    document.getElementById("p3").innerHTML = lorem;
}

//Returns a Lorem Ipsum String based on the number or sentences specified
function fun4() {
    var stringNumber = document.getElementById("stNo").value
    var newLorem = lorem.split(".");
    var a = ""
    for (var i = 0; i < stringNumber; i++) {
        a = a + newLorem[i] + " | \n";
    }
    document.getElementById("p4").innerHTML = a;
    console.log(a)
    if (stringNumber == "") document.getElementById("p4").innerHTML = "Enter a number in the textbox.";

}

//Returns a Lorem Ipsum String based on the number or character specified
function fun5() {
    var stringNumber = document.getElementById("stNo2").value
    var newLorem = lorem.split("");
    var a = ""
    for (var i = 0; i < stringNumber; i++) {
        a = a + newLorem[i] + " | \n";
    }
    document.getElementById("p5").innerHTML = a;
    console.log(a)
    if (stringNumber == "") document.getElementById("p5").innerHTML = "Enter a number in the textbox.";

}

//Returns the current date(formatted)
function fun6() {
    var dat = new Date();
    var a = dat + "\n |||||| And this is the normal date." + dat.getDay() + "/" + dat.getMonth() + "/" + dat.getFullYear();
    document.getElementById("p6").innerHTML = a;

}
//Returns the current time(formatted)
function fun7() {
    var dat = new Date()
    var hr = dat.getHours()
    var min = dat.getMinutes()
    var AmPm
    if (hr < 12) AmPm = "AM"
    else if (hr > 12) AmPm = "PM"
    if (hr > 12) hr = hr - 12
    if (hr < 10) hr = "0" + hr
    if (min < 10) min = "0" + min
    var a = hr + ":" + min + " " + AmPm;
    document.getElementById("p7").innerHTML = a;
}

// Converts Inches to Feet
function InchToFeets() {
    var inn = document.getElementById("i2f").value
    var a = inn * 0.08334
    document.getElementById("p8").innerHTML = a;
}

//Convert Feet to Inches
function FeetsToInch() {
    var feet = document.getElementById("f2i").value
    var a = feet * 12
    document.getElementById("p9").innerHTML = a;
}

// Compares if two words are the same length
function sameLengthComparison() {
    var comp1 = document.getElementById("comp1").value
    var comp2 = document.getElementById("comp2").value
    comp1 = parseInt(comp1.length)
    comp2 = parseInt(comp2.length)

    console.log(comp1 + " " + comp2)
    if (comp1 > comp2) {
        document.getElementById("p10").innerHTML = "String 1 is greater in length."
        console.log("String 1 is greater in length.")
    }
    else if (comp1 < comp2) {
        document.getElementById("p10").innerHTML = "These 2 are of equal lenght."
        console.log("These 2 are of equal lenght.")
    }
    else if (comp1 == comp2) {
        document.getElementById("p10").innerHTML = "String 1 and String 2 are equal in length."
        console.log("String 1 and String 2 are equal in length.")
    }
}

//Returns a random password
function randomPassword() {
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ '
    chars = chars.split("")
    console.log(chars)
    //lenght 10
    var a = ""
    for (let i = 0; i < 10; i++) {
        var m = randomGenerator(1, 63)
        console.log(chars[m])
        if (chars[m] == undefined) {
            a = a + "L"
            continue
        }
        a = a + chars[m];
    }
    document.getElementById("p11").innerHTML = a + "   ---Size of password using .lenght " + a.length
}

//Tells if the number is even or odd

function evenOdd() {
    var check = document.getElementById("evenodd").value
    if ((check != NaN) || (check == "") || (check == " ")) {
        a = "Enter a integer value not a character or string."
    }
    if ((check % 2) == 1) a = "It is Odd"
    if ((check % 2) == 0) a = "It is Even"


    document.getElementById("p12").innerHTML = a
}

//return a random color
function randomColorGenerator() {
    var ran = randomGenerator(0, 4)
    var colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple']
    console.log(ran)
    document.getElementById("p13").innerHTML = colors[ran]
}

//Returns a random first and last name
function randomNames() {
    var ran1 = randomGenerator(0, 4)
    var fName = ['Ujjwal', 'Rahul', 'Savita', 'Samairya', 'Vikas']
    var ran2 = randomGenerator(0, 4)
    var lName = ['Pandey', 'Pal', 'Maurya', 'Tiwari', 'Vishwakarma']
    document.getElementById("p14").innerHTML = "First Name:- " + fName[ran1] + ", Last Name:- " + lName[ran2]
}