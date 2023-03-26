const devName = "Aaron"

const buildMessage = (name) => `Hello World from ${name}`;

const numberOfImages = 4;

const images = [];

const state = {
    count: 0
};

const updateState = ({count}) => {
    if(!Number.isInteger(count)){
        throw new Error(`InvalidUpdate: ${JSON.stringify({count})}`)
    }

    state.count = count;

    render();
}

const render = () => {
    document.getElementById("countDisplay").innerText = state.count;

    document.querySelector('img').src = images[state.count];
}

const initialize = () => {
    render()
}

fetch(`https://dog.ceo/api/breeds/image/random/${numberOfImages}`)
.then(response => response.json())
.then(
    ({message,status}) =>{

        if(status!=='success'){
            throw new Error(`Fetch failed! response: ${response.json()}`)
        }



        message.forEach(url => images.push(url));

        initialize()
    }
)

document.querySelector('h1').innerText = `${buildMessage(devName)}`;

document.title = `${devName}'s Dope Site`;

document.querySelector("#next").addEventListener(
    'click',
    () => {
        const oldCount = state.count;

        const newCount = (oldCount+1) % images.length;

        updateState({count: newCount });
    }
)

document.querySelector("#prev").addEventListener(
    'click',
    () => {
        const oldCount = state.count;

        const newCount = oldCount === 0 ? images.length-1 : oldCount -1;

        updateState({count: newCount})
    }
)



