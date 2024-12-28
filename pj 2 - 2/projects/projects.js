const ball = document.querySelector('.ball');
const icons = document.querySelectorAll('li');
const icons2 = document.querySelectorAll("#link-2");
const textElement = document.querySelector('.profile-bio');



document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const ballRadius = ball.offsetWidth / 2;

    const x = Math.min(Math.max(mouseX, ballRadius), window.innerWidth - ballRadius);
    const y = Math.min(Math.max(mouseY, ballRadius), window.innerHeight - ballRadius);

    ball.style.left = `${x - ballRadius}px`;
    ball.style.top = `${y - ballRadius}px`;
});

icons.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
        ball.style.backgroundColor = 'transparent';
        ball.style.transform = 'scale(2)';
    });

    icon.addEventListener('mouseout', () => {
        ball.style.backgroundColor = '#37ff1460';
        ball.style.transform = 'scale(1)';
    });
});


icons2.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
        ball.style.backgroundColor = 'transparent';
        ball.style.transform = 'scale(2)';
    });

    icon.addEventListener('mouseout', () => {
        ball.style.backgroundColor = '#37ff1460';
        ball.style.transform = 'scale(1)';
    });
});







const texts = [
    "Welcome to my website!",
    "I am a Web developer!",
    "Check out my portfolio!",
    "Feel free to contact me anytime.",
    "Thank you for visiting!"
];

let index = 0;
let charIndex = 0;
const typingSpeed = 50; 
const delayBetweenTexts = 2000; 

function typeText() {
   
    const currentText = texts[index];

    if (charIndex < currentText.length) {
        textElement.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(() => {
            charIndex = 0;
            index = (index + 1) % texts.length;
            textElement.textContent = '';
            setTimeout(typeText, typingSpeed);
        }, delayBetweenTexts);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, typingSpeed);
});



















