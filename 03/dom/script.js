// const table = document.createElement('table');

// const newRow = table.insertRow();

// const td1 = newRow.insertCell("A");

// td1.appendChild(document.createTextNode("A"));

// const td2 = newRow.insertCell("B");

// td2.appendChild(document.createTextNode("B"));

// const list = document.createElement('ol');

// [
//     'bread',
//     'milk',
//     'cheese'
// ].forEach(
//     item => {
//         const listItem = document.createElement('li');

//         listItem.innerText = item;

//         list.appendChild(listItem)
//     }
// )

// document.getElementById('render-root').appendChild(list);

const buildList = (...items) => {
    const list = document.createElement('ol');

    items.forEach(
        item => {
            const listItem = document.createElement('li');

            listItem.innerText = item;

            list.appendChild(listItem)
        }
    )

    return list;
}

document.getElementById('render-root').appendChild(buildList('milk','bread','cereal'));

document.getElementById('render-root').appendChild(buildList('apples','organes','bananas','ice cream'))

document.getElementById('phantom').remove();


