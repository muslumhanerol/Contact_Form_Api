(function () {
    emailjs.init("9WwnVFPXzkgvCtAhM");
})();

const constactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('success-message');

constactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        to_name: "Admin",
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        reply_to: document.getElementById('email').value
    };

    emailjs.send('service_ngdpllo', 'service_ngdpllo', formData).then(function (response) {
        successMessage.classList.remove('hidden');

        constactForm.reset();

        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);

    }).catch(function (error) {
        alert('Failed to send message. Please try again:');

    });

});
