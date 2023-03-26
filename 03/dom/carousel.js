const devName = "Aaron"

const buildMessage = (name) => `Hello World from ${name}`;

const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg'
]

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

const initialize = () => {
    render()
}

initialize()