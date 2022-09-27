const initEmail = function () {
    emailjs.init(process.env.EMAIL_KEY);
}

initEmail();