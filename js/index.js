var result = 5+5+'5';
console.log(result);
console.log(typeof result);

var email = "daniltrotsko9@gmail.com";
var check_email_is = email.includes("@");
if (check_email_is === false) {
    console.log("This is not an email.");
} else {
    var email_lenght = email.length;
    console.log(check_email_is);
    console.log(email_lenght);
}

var one = "My";
var two = "name";
var three = "is";
var fullName = `${one} ${two} ${three} Viktor.`;
console.log(fullName);

var userName = "qwerty12345";
var payment = 150;
alert("Дякуємо, " + userName + "! До сплати " + payment + " гривень");
