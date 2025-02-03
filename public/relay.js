const messages = [
    'hmm Pookieee 😒',
    'I am not sure what to say 😕',
    'better you do not joke with me',
    'you wan papi to spank you?',
    'so you are saying you do not want to talk to me again',
    'fine I will not anymore',
    'I am just kidding baby, please talk to me',
    'OKAY FINE I WILL BEG YOU, PLEASEEEEEEEEEEEEEEEE',
    'I am not sure what to say, I am just so confused',
    'I am just kidding, I love you',
    'Say yes please ❤️❤️',
];

let messagesIndex = 0;

function NoClick(){
    const noButton = document.querySelector('.no');
    const yesButton = document.querySelector('.yes');
    noButton.textContent = messages[messagesIndex];
    messagesIndex = (messagesIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function YesClick(){
    window.location.href = 'yes.html';
}

function ReturnClick(){
    window.location.href = 'index.html';
}

