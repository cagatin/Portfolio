const form = document.querySelector('#contact-form');

const initEmail = function () {
    emailjs.init(`f60rq9SK_mpH65ZEI`);
}

const handleSubmit = function (event) {
    event.preventDefault();

    const message = document.querySelector('#email_content').value;
    const from_name = document.querySelector('#user_name').value;
    const from_email = document.querySelector('#user_email').value;

    const contact = {
        from_name,
        from_email,
        message
    }

    emailjs
        .send('cagatingilbert', "template_181s8oy", contact)
        .then(() => document.querySelector('#submit-form').value = 'Sucessfully Sent!')
        .catch((err) => document.querySelector('#submit-form').value = 'Could not send email!')
}

form.addEventListener('submit', handleSubmit);

initEmail();