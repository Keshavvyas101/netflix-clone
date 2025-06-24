const faqBoxes = document.querySelectorAll('.faqbox');

faqBoxes.forEach(function(box) {
    box.addEventListener('click', function() {
        box.classList.toggle('active');
        const svgIcon = box.querySelector('svg');
        svgIcon.style.transform = box.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0deg)';
        
        const answer = box.querySelector('.answer');
        answer.style.display = box.classList.contains('active') ? 'block' : 'none';
    });
});

const emailInput = document.querySelector('.hero-buttons input');
const getStartedButton = document.querySelector('.hero-buttons .btn-red');

getStartedButton.addEventListener('click', function() {
    const email = emailInput.value;
    if (email) {
        alert('Welcome! You have entered: ' + email);
    } else {
        alert('Please enter a valid email address.');
    }
});
