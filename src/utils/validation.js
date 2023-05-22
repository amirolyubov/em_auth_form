const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
const usernameRegex = /^@([A-Za-z0-9_]{1,15})$/;

function validateSignIn(values) {
    const errors = {};

    if (!values.email) {
        errors.email = "user is required";
    } else if (values.email[0] === "@") {
        if (!usernameRegex.test(values.email)) {
            errors.email = "username should be an email or @user";
        }
    } else if (!emailRegex.test(values.email)) {
        errors.email = "email is not valid";
    }

    if (!values.password) {
        errors.password = "password is required";
    } else if (values.password.length < 8) {
        errors.password = "password should be at least 8 symbols";
    }

    return errors;
}

function validateSignUp(values) {
    const errors = {};

    if (!values.email) {
        errors.email = "email is required";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "email is not valid";
    }

    if (!values.password) {
        errors.password = "password is required";
    } else if (values.password.length < 8) {
        errors.password = "password should be at least 8 symbols";
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = "password confirmation should not be empty";
    } else if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = "passwords are not equal";
    }

    if (!values.isAgree) {
        errors.isAgree = "";
    }

    return errors;
}

export { validateSignIn, validateSignUp };
