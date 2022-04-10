export const signupValidation = (data) => {
    let errors = {};

    if (!data.fname) {
        errors.fname = "First Name is Required."
    }
    if (!data.lname) {
        errors.fname = "Last Name is Required."
    }
    if (!data.email) {
        errors.email = "Email Is Required."
    }
    else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Invalid Email"
    }
    if (!data.password) {
        errors.password = "Password is required."
    }
    else if (data.password.length < 8) {
        errors.password = "Password Must be more than Six Characters"
    }
    return errors;

}