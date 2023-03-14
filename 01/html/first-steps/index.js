/**
 * Welcome to the JavaScript playground! If you'd like to see the value of a 
 * variable, simply put its name in the list passed to `display({result1,result2,result3})`!
 */
const display = (someRecord) => document.getElementById("result").innerHTML = JSON.stringify(someRecord)

const p1 = document.createElement("p");

p1.innerText = 'Hello Universe!'



const table = document.createElement("table");

const buildRow = (values, isHeader = false) => values.map(
    value => {
        const newEl = document.createElement(isHeader ? "th" : "td");

        newEl.innerText = value;

        return newEl;
    }
)

const headerCells = buildRow(['A', 'B'], true);

const bodyCells = buildRow(['a', 'b'], true)


const headerRow = document.createElement('tr');

headerCells.forEach(
    cell => headerRow.appendChild(cell)
)

const bodyRow = document.createElement('tr')

bodyCells.forEach(
    cell => bodyRow.appendChild(cell)
)

table.appendChild(headerRow);

table.appendChild(bodyRow);

document.getElementById('result').appendChild(table);


const result = "Hello World!"

display({ result });

