const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
const usernameRegex = /^@([A-Za-z0-9_]{1,15})$/;
const passwordRegex = /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]+$/;

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
    } else if (!passwordRegex.test(values.password)) {
        errors.password = "password does not match requirements";
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

function validateConfirmPassword(values) {
    const errors = {};

    if (!values.password) {
        errors.password = "password is required";
    } else if (values.password.length < 8) {
        errors.password = "password should be at least 8 symbols";
    } else if (!passwordRegex.test(values.password)) {
        errors.password = "password does not match requirements";
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = "password confirmation should not be empty";
    } else if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = "passwords are not equal";
    }

    return errors;
}

function validateResetPassword(values) {
    const errors = {};

    if (!values.email) {
        errors.email = "email is required";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "email is not valid";
    }

    return errors;
}

export {
    validateSignIn,
    validateSignUp,
    validateResetPassword,
    validateConfirmPassword,
};
