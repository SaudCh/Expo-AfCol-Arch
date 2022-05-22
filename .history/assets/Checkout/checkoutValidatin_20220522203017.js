export const loginValidation = (data) => {
    let errors = {};

    if (!data.email) {
        errors.email = "Email Is Required."
    }
    else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Invalid Email"
    }

    if (!data.firstName) {
        errors.firstName = "First Name is required."
    }

    if (!data.address) {
        errors.address = "Address is required."
    }

    if (!data.city) {
        errors.address = "Address is required."
    }

    if (!data.postalCode) {
        errors.address = "Postal code is required."
    }

    if (!data.refPhone) {
        errors.address = "Phone Number is required."
    }

    return errors;

}