function fakeRequest(response, pwd) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
}

export { fakeRequest };
