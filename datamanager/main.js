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
    }

    /**
     * @param {Number} ageA
     */
    filterAge(ageA){
        /**
         * @type {Person[]}
         */
        const result = []

        for (const elem of this.#array){
            if (elem.age.includes(ageA)){
                result.push(elem);
            }
        }
    }

    /**
     * @param {String} nameA
     */
    filterName(nameA){
        /**
         * @type {Person[]}
         */
        const result = []

        for (const elem of this.#array){
            if (elem.name.includes(nameA)){
                result.push(elem);
            }
        }
    }
}

class TableClass {
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
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        dataManager.setUpdateCallback(
            (people) => {
                tbody.innerHTML = '';
                for (const pers of people) {
                    /**
                     * @type {HTMLElement}
                     */
                    const tr = document.createElement('tr');
                    tbody.appendChild(tr);

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
        )
    }
}

const data_manager = new DataManagerClass([{name: "Feri", age: 17}, 
    {name: "Géza", age: 17},
    {name: "Józsi", age: 18},
]);
const data_class = new TableClass(data_manager);

const input = document.createElement('input')
document.body.appendChild(input)

//input.addEventListener('input', function(e)) => { }