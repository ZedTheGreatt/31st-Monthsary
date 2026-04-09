const messages = [
    { text: "Hi Baby!", sig: "Swipe to see..." },
    { text: "I just want you to know that,", sig: "✨" },
    { text: "I'm sorry for everything,", sig: "🌷" },
    { text: "Sa lahat ng away natin, sa tampuhan,", sig: "💖" },
    { text: "Sa di pagkakaintindihan, at sa kung ano-ano pang away natin.", sig: "💍" },
    { text: "I just want you to know that I'm really sorry.", sig: "💌" },
    // ... all other messages
    { text: "Happy 31st Monthsary Love! Mahal na mahal kita Love, I love you <3", sig: "✨" }
];

const swipeArea = document.getElementById('swipeArea');
const progress = document.getElementById('progress');
const resetBtn = document.getElementById('resetBtn');
const prevBtn = document.getElementById('prevBtn');
const hint = document.getElementById('hint');

let currentIndex = 0;
let dismissedStack = [];

// Adjust card height dynamically
function adjustCardHeight() {
    const vh = window.innerHeight;
    swipeArea.style.height = Math.min(vh * 0.55, 440) + 'px';
}

// Dynamically shrink text to fit card
function fitText(card) {
    const p = card.querySelector('p');
    let fontSize = parseFloat(window.getComputedStyle(p).fontSize);
    const maxHeight = card.clientHeight - 80; // padding
    p.style.fontSize = fontSize + 'px';

    while (p.scrollHeight > maxHeight && fontSize > 12) {
        fontSize -= 1;
        p.style.fontSize = fontSize + 'px';
    }
}

// Create a single card element
function createCard(msg) {
    const card = document.createElement('div');
    card.className = 'card';
    const rotate = (Math.random() - 0.5) * 6;
    card.setAttribute('data-initial-rotate', rotate);
    card.style.transform = `rotate(${rotate}deg)`;

    card.innerHTML = `
        <div class="card-inner-border"></div>
        <p>${msg.text}</p>
        <div class="signature">${msg.sig}</div>
    `;
    fitText(card);
    return card;
}

// Render top 3 cards in DOM
function renderCards() {
    swipeArea.innerHTML = '';
    const start = Math.max(currentIndex - 1, 0);
    const end = Math.min(currentIndex + 2, messages.length);
    for (let i = start; i < end; i++) {
        const card = createCard(messages[i]);
        card.style.zIndex = messages.length - i;
        swipeArea.appendChild(card);
        attachSwipe(card, i);
    }
}

// Attach swipe gestures to a card
function attachSwipe(card, index) {
    let startX = 0, startY = 0, isDragging = false;

    card.addEventListener('pointerdown', e => {
        startX = e.clientX;
        startY = e.clientY;
        isDragging = true;
        card.style.transition = 'none';
        card.setPointerCapture(e.pointerId);
    });

    card.addEventListener('pointermove', e => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const rotate = dx / 15;
        card.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotate}deg)`;
    });

    card.addEventListener('pointerup', e => {
        if (!isDragging) return;
        isDragging = false;
        const dx = e.clientX - startX;
        const threshold = swipeArea.offsetWidth * 0.35;

        if (Math.abs(dx) > threshold) {
            dismissCard(card, dx > 0 ? 1 : -1, index);
        } else {
            const initRot = card.getAttribute('data-initial-rotate');
            card.style.transition = 'transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275)';
            card.style.transform = `translate(0,0) rotate(${initRot}deg)`;
        }
    });
}

// Animate card dismissal
function dismissCard(card, direction, index) {
    card.style.transition = 'transform 0.6s ease-in, opacity 0.3s';
    const screenWidth = window.innerWidth;
    card.style.transform = `translate(${direction * (screenWidth + 200)}px, 0) rotate(${direction * 45}deg)`;
    card.style.opacity = '0';

    setTimeout(() => {
        dismissedStack.push(index);
        currentIndex++;
        updateUI();
        renderCards();
    }, 300);
}

// Show previous card
function showPrevious() {
    if (dismissedStack.length === 0) return;
    currentIndex = dismissedStack.pop();
    updateUI();
    renderCards();
}

// Update progress and hint
function updateUI() {
    const displayIndex = Math.min(currentIndex + 1, messages.length);
    progress.innerText = `${displayIndex} / ${messages.length}`;

    prevBtn.disabled = dismissedStack.length === 0;

    if (currentIndex >= messages.length) {
        hint.innerText = "Yours Truly, Jay❤️";
        hint.style.animation = "none";
        hint.style.fontSize = "1.2rem";
    } else {
        hint.innerText = "Swipe left or right";
        hint.style.animation = "bounce 2s infinite";
        hint.style.fontSize = "0.9rem";
    }
}

// Initialize app
function init() {
    adjustCardHeight();
    currentIndex = 0;
    dismissedStack = [];
    renderCards();
    updateUI();
}

resetBtn.addEventListener('click', init);
prevBtn.addEventListener('click', showPrevious);
window.addEventListener('resize', () => {
    adjustCardHeight();
    document.querySelectorAll('.card').forEach(fitText);
});
window.onload = init;
