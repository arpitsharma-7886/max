// Check if device is mobile
function isMobile() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Create twinkling stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    // Reduce stars on mobile for better performance
    const numberOfStars = isMobile() ? 25 : 50;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Add sparkle effect on click/touch
document.addEventListener('click', function(e) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = (e.clientX || e.touches?.[0]?.clientX || 0) + 'px';
    sparkle.style.top = (e.clientY || e.touches?.[0]?.clientY || 0) + 'px';
    sparkle.style.fontSize = isMobile() ? '1.5em' : '2em';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});

// Also add touch support for mobile
document.addEventListener('touchstart', function(e) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = (e.touches[0].clientX || 0) + 'px';
    sparkle.style.top = (e.touches[0].clientY || 0) + 'px';
    sparkle.style.fontSize = '1.5em';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: scale(1.5) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Initialize stars when page loads
window.addEventListener('DOMContentLoaded', createStars);

// Add gentle floating animation to content (only on desktop)
const content = document.querySelector('.content');
if (!isMobile()) {
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        content.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
}

// Add confetti effect on page load
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    // Reduce confetti on mobile for better performance
    const confettiCount = isMobile() ? 15 : 30;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = isMobile() ? '8px' : '10px';
            confetti.style.height = isMobile() ? '8px' : '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9998';
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 100);
    }
}

// Add fall animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Trigger confetti after a short delay
setTimeout(createConfetti, 500);

