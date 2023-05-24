const requestTime = 2000;

function fakeRequest(req, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cb(req));
        }, requestTime);
    });
}
function validateCsrf(token) {
    // this is primitive token validation
    return token === "123";
}

function validateToken(token) {
    return fakeRequest(token, (token) => token === "1234");
}

function getCsrf() {
    return fakeRequest(null, () => ({ token: "123" }));
}

function signIn(data) {
    return fakeRequest(data, (data) => {
        if (!validateCsrf(data.csrfToken)) {
            return false;
        } else {
            if (
                (data.email === "test@test.com" || data.email === "@test") &&
                data.password === "Iwannabeyourdog1"
            ) {
                return true;
            } else {
                return { error: "password" };
            }
        }
    });
}

function signUp(data) {
    return fakeRequest(data, (data) => {
        if (!validateCsrf(data.csrfToken)) {
            return false;
        } else {
            if (data.email === "test@test.com") {
                return { error: "same_email" };
            } else {
                return true;
            }
        }
    });
}

function resetPassword(data) {
    return fakeRequest(null, () => true);
}

function confirmPassword(data) {
    return fakeRequest(null, () => true);
}

export {
    getCsrf,
    validateToken,
    signIn,
    signUp,
    resetPassword,
    confirmPassword,
};
