document.getElementById('login-btn').addEventListener('click', function (e) {


    const mobileNumber = getElementValueById('mobile-number');
    const pinNumber = getElementValueById('pin-number');

    if (mobileNumber === 1234 && pinNumber === 1234) {
        window.location.href = '/home.html';

    } else {
        alert('Mobile number and Password does not match')
    }


    e.preventDefault();
})