exports.generatePassword = async (req, res) => {
    try {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
            uppercase = getRandomUpper(),
            lowercase = getRandomLower(),
            number = getRandomNumber(),
            symbol = getRandomSymbol(),
            password = uppercase + lowercase + number + symbol;

        for (var i = password.length; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        res.json({
            success: "true",
            password: password.slice(0, length),
        });
    }
    catch (err) {
        res.json({
            success: "false",
            message: err.message,
        });
    }
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    var symbols = "!@#$%^&*()";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// var password = generatePassword();
// console.log(password); // e.g. 'a5T!pntu14'
