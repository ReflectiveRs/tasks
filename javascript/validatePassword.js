function validate(password) {
    return  /^[A-Za-z0-9]{6,}$/.test(password) &&
            /[A-Z]+/           .test(password) &&
            /[a-z]+/           .test(password) &&
            /[0-9]+/           .test(password) ;
}

console.log(validate('gt4GW7Jy7'));		// true
console.log(validate('240486797='));	// false