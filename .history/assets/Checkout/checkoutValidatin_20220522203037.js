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
        errors.city = "City is required."
    }

    if (!data.postalCode) {
        errors.postalCode = "Postal code is required."
    }

    if (!data.refPhone) {
        errors.refPhone = "Phone Number is required."
    }

    return errors;

}