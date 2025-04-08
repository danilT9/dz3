let result = 5+5+'5';
console.log(result);
console.log(typeof result);

let email = prompt("Введіть свій email:");
console.log(email);
let check_email_is = email.includes("@");
if (check_email_is === false) {
    console.log("This is not an email.");
} else {
    let email_lenght = email.length;
    console.log(check_email_is);
    console.log(email_lenght);
}

let one = "My";
let two = "name";
let three = "is";
let fullName = `${one} ${two} ${three} Viktor.`;
console.log(fullName);

let userName = "qwerty12345";
let payment = 150;
alert("Дякуємо, " + userName + "! До сплати " + payment + " гривень");
