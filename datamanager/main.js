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

        for (const item of this.#array){
            if (item.age == ageA){
                result.push(item);
            }
        }
        this.#updateCallback(result);
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

const data_manager = new DataManagerClass([{name: "Feri", age: 17}, 
    {name: "Géza", age: 17},
    {name: "Józsi", age: 18},
]);
const data_class = new TableClass(data_manager);

const inputName = document.createElement('input');
document.body.appendChild(inputName);
inputName.addEventListener('input', function(e){
    data_manager.filterName(inputName.value)
});

const inputAge = document.createElement('input');
document.body.appendChild(inputAge);
inputAge.addEventListener('input', function(e){
    let ageNumber = Number(inputAge.value)
    data_manager.filterAge(ageNumber)
});

//input.addEventListener('input', function(e)) => { }