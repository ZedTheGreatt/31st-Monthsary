const messages = [
    { text: "Hi Baby!", sig: "Swipe to see..." },
    { text: "I just want you to know that,", sig: "✨" },
    { text: "I'm sorry for everything,", sig: "🌷" },
    { text: "Sa lahat ng away natin, sa tampuhan,", sig: "💖" },
    { text: "Sa di pagkakaintindihan, at sa kung ano-ano pang away natin.", sig: "💍" },
    { text: "I just want you to know that I'm really sorry.", sig: "💌" },
    { text: "I'm not saying this kasi nauna kang nagsorry,", sig: "✨" },
    { text: "Kundi dahil ramdam ko yung mga pagkakamali ko sayo.", sig: "🌷" },
    { text: "Pagkakamali, mga pagkakamali na hindi ko kayang gamutin ng ganun kabilis,", sig: "💖" },
    { text: "Pero susubukan kong ayusin kahit sa maliliit na bagay.", sig: "💍" },
    { text: "Sometimes I feel like I'm such a burden to be your boyfriend,", sig: "💌" },
    { text: "But ayoko din naman na iba yung lalaking nandyan para sayo.", sig: "✨" },
    { text: "Gusto kitang makitang masaya... Sakin,", sig: "🌷" },
    { text: "Kasi sa tingin ko diko kakayanin kung sa ibang lalaki ka maging masaya.", sig: "💖" },
    { text: "I mean, I'm happy when you're happy.", sig: "💍" },
    { text: "Kung napapasaya ka ng mga kaibigan mo,", sig: "💌" },
    { text: "Ng pamilya mo, at ng iba.", sig: "✨" },
    { text: "Siguro sinasabi ko nalang talaga na", sig: "🌷" },
    { text: "\"Sa ibang lalaki ka mas magiging masaya\"", sig: "💖" },
    { text: "Kasi nararamdaman kong hindi na kita napapasaya,", sig: "💍" },
    { text: "Pero deep inside... I want to be the man who makes you smile every single day.", sig: "💌" },
    { text: "But in reality, I'm also the person who makes you cry and sad...", sig: "✨" },
    { text: "That's why I'm sorry about everything.", sig: "🌷" },
    { text: "I'm sorry that I'm like this.", sig: "💖" },
    { text: "Na ganito akong boyfriend at partner sayo.", sig: "💍" },
    { text: "I might be the most nonchalant and not showy na taong nakilala mo.", sig: "💌" },
    { text: "Yes di ako showy pero mahal na mahal kita.", sig: "✨" },
    { text: "I might be nonchalant all the time,", sig: "🌷" },
    { text: "But deep inside mahal na mahal kita.", sig: "💖" },
    { text: "You're the first girl I have ever love.", sig: "💍" },
    { text: "You're my first love.", sig: "💌" },
    { text: "You're my first time in almost everything.", sig: "✨" },
    { text: "Ikaw yung kasama ko sa mga first time ko sa mga bagay-bagay.", sig: "🌷" },
    { text: "That's why you're so memorable to me.", sig: "💖" },
    { text: "And I love you ofcourse kaya di kita makakalimutan.", sig: "💍" },
    { text: "I love your personality, your beauty,", sig: "💌" },
    { text: "Matalino ka, mabait, mapagmahal.", sig: "✨" },
    { text: "Yes we're just simple, but the vibe and chemistry that we made is wonderful.", sig: "🌷" },
    { text: "Yeah we fight a lot, siguro dahil din di tayo magkasama at miss ang isa't isa.", sig: "💖" },
    { text: "Posibleng may problema, gutom o kung anong pinagdadaanan kaya nagagalit.", sig: "💍" },
    { text: "Yeah nagagalit sa isa't isa, pero deep inside mahal padin ang isa't isa.", sig: "💌" },
    { text: "In 2 years 7 months in a relationship, more than 2 months courtship, and more than 1 month talking stage.", sig: "✨" },
    { text: "I like you and I love you from the start <3", sig: "🌷" },
    { text: "Siguro nawala na yung spark at nagiging normal at casual nalang yung mga bagay-bagay,", sig: "💖" },
    { text: "Pero the love is still here, right?", sig: "💍" },
    { text: "I hope di ka magsawa sakin, asawa ko <3", sig: "💌" },
    { text: "Ay HHAHAHAHAHAHASANAASAWANAKITAPARAKISSLANGBATINAAGAD", sig: "✨" },
    { text: "Mwaaaaaaaaaaaaaahhhhhhhhhhh hehe", sig: "🌷" },
    { text: "Again, I'm really sorry kung lagi nalang tayong ganito.", sig: "💖" },
    { text: "I'm sorry kung lagi nalang away o misunderstanding pag monthsary, sorry Love.", sig: "💍" },
    { text: "Ang hirap din pag malayo sa asawa, hindi ma kiss at ma hug kaya nag-aaway eh hehehe.", sig: "💌" },
    { text: "I hope I make it up to you na makabawi ako sa mga pagkakamali ko sayo,", sig: "✨" },
    { text: "Na makabawi tayo sa isa't isa.", sig: "🌷" },
    { text: "And I hope na di ka magsawa at di mo ko iwan :>", sig: "💖" },
    { text: "I just want to say thank you for everything Love.", sig: "💍" },
    { text: "I'm so thankful to God kasi pinagtagpo tayo.", sig: "💌" },
    { text: "We're not perfect, but ang mahalaga sinusubukan natin bumawi.", sig: "✨" },
    { text: "I'm so thankful kasi sayong klaseng babae ako napunta.", sig: "🌷" },
    { text: "Maayos ka at di pariwara sa buhay, may pangarap at may puso.", sig: "💖" },
    { text: "Mahal na mahal kita Love kung sino ka.", sig: "💍" },
    { text: "I love you <3", sig: "💌" },
    { text: "Sa totoo lang diko kayang sabihin mga toh sa personal HHAHAHAHAHAHA", sig: "✨" },
    { text: "Kaya dito ko nalang din sinabi, at sana nasabi ko lahat ng kailangan at gusto kong sabihin sayo Mahal.", sig: "🌷" },
    { text: "I might be sounded cringe or cheesy, but ito yung nararamdaman ko sayo.", sig: "💖" },
    { text: "Hindi toh pampagaan ng loob, kundi pag express ko ng pagmamahal ko sayo.", sig: "💍" },
    { text: "And I hope I expressed my love for you in these letter.", sig: "💌" },
    { text: "Happy 31st Monthsary Love! Mahal na mahal kita Love, I love you <3", sig: "✨" }
];

const swipeArea = document.getElementById('swipeArea');
const progress = document.getElementById('progress');
const resetBtn = document.getElementById('resetBtn');
const prevBtn = document.getElementById('prevBtn');
const hint = document.getElementById('hint');

let cardElements = [];
let dismissedCards = [];
let cardCount = 0;

function adjustCardHeight() {
    const vh = window.innerHeight;
    swipeArea.style.height = Math.min(vh * 0.55, 440) + 'px';
}

function createCard(data, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.zIndex = messages.length - index;

    const rotate = (Math.random() - 0.5) * 6;
    card.setAttribute('data-initial-rotate', rotate);
    card.style.transform = `rotate(${rotate}deg)`;

    card.innerHTML = `
        <div class="card-inner-border"></div>
        <p>${data.text}</p>
        <div class="signature">${data.sig}</div>
    `;

    const hammer = new Hammer(card);
    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL, threshold: 1 });

    hammer.on('pan', (e) => {
        if (card.classList.contains('is-dismissing')) return;
        const x = e.deltaX;
        const y = e.deltaY;
        const rotate = x / 15;
        card.style.transition = 'none';
        card.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
    });

    hammer.on('panend', (e) => {
        const x = e.deltaX;
        const velocity = e.velocityX;
        const threshold = swipeArea.offsetWidth * 0.35;

        if (Math.abs(x) > threshold || Math.abs(velocity) > 0.5) {
            dismissCard(card, x > 0 ? 1 : -1, index);
        } else {
            card.style.transition = 'transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275)';
            const initRot = card.getAttribute('data-initial-rotate');
            card.style.transform = `translate(0,0) rotate(${initRot}deg)`;
        }
    });

    return card;
}

function dismissCard(card, direction, index) {
    card.classList.add('is-dismissing');
    const screenWidth = window.innerWidth;
    const targetX = direction * (screenWidth + 200);

    card.style.transition = 'transform 0.6s ease-in, opacity 0.3s';
    card.style.transform = `translate(${targetX}px, 0) rotate(${direction * 45}deg)`;
    card.style.opacity = '0';

    setTimeout(() => {
        card.style.display = 'none';
        dismissedCards.push(index);
        cardCount++;
        updateUI();
    }, 500);
}

function showPreviousCard() {
    if (dismissedCards.length === 0) return;
    const lastIndex = dismissedCards.pop();
    const card = cardElements[lastIndex];

    card.style.display = 'flex';
    card.classList.remove('is-dismissing');
    card.style.transition = 'none';
    card.style.opacity = '0';
    card.style.transform = `translate(0,-100px) rotate(0deg)`;

    card.offsetHeight;

    const initRot = card.getAttribute('data-initial-rotate');
    card.style.transition = 'transform 0.5s cubic-bezier(0.175,0.885,0.32,1.275), opacity 0.3s';
    card.style.transform = `translate(0,0) rotate(${initRot}deg)`;
    card.style.opacity = '1';

    cardCount--;
    updateUI();
}

function updateUI() {
    const current = Math.min(cardCount + 1, messages.length);
    progress.innerText = `${current} / ${messages.length}`;
    prevBtn.disabled = dismissedCards.length === 0;

    if (cardCount === messages.length) {
        hint.innerText = "Yours Truly, Jay❤️";
        hint.style.animation = "none";
        hint.style.fontSize = "1.2rem";
    } else {
        hint.innerText = "Swipe left or right";
        hint.style.animation = "bounce 2s infinite";
        hint.style.fontSize = "0.9rem";
    }
}

function init() {
    adjustCardHeight();
    swipeArea.querySelectorAll('.card').forEach(c => c.remove());

    cardElements = [];
    dismissedCards = [];
    cardCount = 0;

    messages.forEach((msg, i) => {
        const card = createCard(msg, i);
        cardElements.push(card);
        swipeArea.appendChild(card);
    });

    updateUI();
}

window.addEventListener('resize', adjustCardHeight);
resetBtn.addEventListener('click', init);
prevBtn.addEventListener('click', showPreviousCard);
window.onload = init;
