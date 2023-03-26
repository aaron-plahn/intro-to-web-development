const cardTemplate = document.querySelector("#card");

document.querySelector('#card').remove();

const nowPlaying = document.createElement('p');

nowPlaying.innerText = 'Now Playing!'

const playButton = document.querySelector('#play-button');

console.log({playButton})

playButton.addEventListener(
    'click',
    () =>{
        console.log('foooo1')
        playButton.remove();

        init();
    }
)

const cardBack = document.createElement('p');

cardBack.innerHTML  = 'BACK';

const cards = [{
    text: 'hi',
    translation: 'hello'
},{
    text: 'bye',
    translation: 'goodbye'
}]

const layoutCards = cards.forEach(
    ({text,translation}) => {
        const elem = cardTemplate.cloneNode(true);

        elem.querySelector('h2').innerText = text;

        elem.querySelector('h3').innerText = translation;

        document.querySelector('#play-area').appendChild(elem);
    }
)

const init = () =>{
   document.querySelector('#play-area').appendChild(nowPlaying);

   layoutCards();
}