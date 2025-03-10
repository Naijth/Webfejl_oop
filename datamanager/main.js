/**
 * @typedef {{name: String, age: Number}} Person
 * @callback UpdateCallback
 * @param {Person[]} people
 * @returns {void}
 */
class DataManagerClass {
    /**
     * @type {Person[]}
     */
    #array;

    /**
     * @type {UpdateCallback}
     */
    #updateCallback;

    /**
     * @param {Person[]} items
     */
    constructor (items = []){
        this.#array = items;
        this.#updateCallback = () => {

        }
    }

    /**
     * @param {UpdateCallback} callback
     */
    setUpdateCallback(callback) {
        this.#updateCallback = callback;
        this.#updateCallback(this.#array) 
    }

    /**
     * @param {Person[]} items
     */
    add(item){
        this.#array.push(item);
        this.#updateCallback(this.#array)
    }

    /**
     * @param {String} nameA
     */
    filterName(nameA){
        /**
         * @type {Person[]}
         */
        const result = []

        for (const item of this.#array){
            if (item.name.includes(nameA)){
                result.push(item);
            }
        }
        this.#updateCallback(result);
    }

    /**
     * @param {function(Person):boolean} callback 
     */
    filter(callback){
        const result = []

        for (const item of this.#array){
            if (callback(item)){
                result.push(item);
            }
        }
        this.#updateCallback(result);
    }
}

class TableClass {
    #tbody;
    /**
     * @param {DataManagerClass} dataManager
     */
    constructor(dataManager){
        /**
         * @type {HTMLElement}
         */
        const table = document.createElement('table');
        document.body.appendChild(table);

        /**
         * @type {HTMLElement}
         */
        this.#tbody = document.createElement('tbody');
        table.appendChild(this.#tbody);

        dataManager.setUpdateCallback(
            (people) => {
                this.#renderTable(people)
            }
        )
    }
    #renderTable(people) {
        this.#tbody.innerHTML = '';
        for (const pers of people) {
            /**
             * @type {HTMLElement}
             */
            const tr = document.createElement('tr');
            this.#tbody.appendChild(tr);

            /**
             * @type {HTMLElement}
             */
            const td1 = document.createElement('td');
            td1.innerHTML = pers.name
            tr.appendChild(td1);

            /**
             * @type {HTMLElement}
             */
            const td2 = document.createElement('td');
            td2.innerHTML = pers.age
            tr.appendChild(td2);
        }
    } 
}

function addBr() {
    const br = document.createElement('br')
    document.body.appendChild(br)
}

const dataManager = new DataManagerClass([{name: "Feri", age: 17}, 
    {name: "Géza", age: 17},
    {name: "Józsi", age: 18}
]);
const dataClass = new TableClass(dataManager);

const inputName = document.createElement('input');
document.body.appendChild(inputName);
inputName.addEventListener('input', function(e){
    dataManager.filter((
        pers) => {
        return pers.name.includes(inputName);
    })
});
addBr();

const inputAge = document.createElement('input');
document.body.appendChild(inputAge);
inputAge.addEventListener('input', function(e){
    let ageNumber = Number(inputAge.value)
    dataManager.filter((pers) => {
        return pers.age == ageNumber;
    })
});
addBr();

//input.addEventListener('input', function(e)) => { }

const inputFile = document.createElement('input');
document.body.appendChild(inputFile);
inputFile.type = "file";
inputFile.addEventListener('change', function(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
        const fileDataSplit = reader.result.split('\n');
        for (const pers of fileDataSplit) {
            const data = pers.split(';');
            Number(data[1])
            const splitPers = {name: data[0], age: data[1]};
            dataManager.add(splitPers);
        }
    }
});