document.addEventListener('DOMContentLoaded', function() {
    buttonlistener();
});

function buttonlistener() {
    const button = document.querySelector('.mainimg2');
    button.addEventListener('click', function() {
        console.log('CLICK!!');
    });
}