class ArrayList {
    /**
     * stores the length of the array list
     * @type {Number}
     */
    #length; 
    #state;

    get Count(){
        return this.#length;
    }

    constructor(){
        this.#length = 0;
        this.#state = {};
    }

    //this fella checks if the input can be located anywhere within the array
    Contains(item){
        for(const value in this.#state){
            if(this.#state[value] == item){
                return true; 
            }
        }
        return false;
    }

    Add(item) {
        const index = this.#length; //creates the index whch stures the current length
        this.#state[index] = item; //gives the state object the input value at the index variable's value
        //with this we can reach the added item
        Object.defineProperty(this, index, 
            {
                get: () => {
                    return this.#state[index];
                },
                set: (value) => {
                    this.#state[index] = value;
                },
                //writable: true
                enumerable: true,
                configurable: true
            })
        this.#length++; //increments length by one
    }

    Clear(){
        this.#length = 0; //sets it back to og value
        this.#state = {}; //sets it back to og value
        for(const key in this){
            delete this[key] //removes the getters and setters
        }        
    }
}

const test = new ArrayList();

const testValue1 = {value: 46};
const testValue2 = {value: "dog"};
const testValue3 = {value: "Üdvözletem kedves felebarátom. Hogy tellik önnek eme gyönyörű nap?"};

test.Add(testValue1);
test.Add(testValue3);

console.log(test.Contains(testValue1));
console.log(test.Contains(testValue2));
console.log(test.Contains(testValue3));

console.log(test);

class arrayHTMLElement extends HTMLElement{
    #tbody
    constructor(){
        super(); // default
    }
    connectedCallback(){
        const table = document.createElement('table');
        this.appendChild(table);
        const thead = document.createElement('thead');
        table.appendChild(thead);
        this.#tbody = document.createElement('tbody');
        table.appendChild(this.#tbody);
    }
    /**
     * @param {{name: String, age: Number}} item 
     */
    addPersonRow(item){
        const a = document.createElement('tr');
        this.#tbody.appendChild(a);

        const b = document.createElement('td');
        b.innerHTML = item.name;
        a.appendChild(b);

        const c = document.createElement('td');
        c.innerHTML = item.age;
        a.appendChild(c);
    }
}

customElements.define(
    'array-table',
    arrayHTMLElement
)

const something = new arrayHTMLElement();
document.body.appendChild(something);

const pers1 = {
    name: 'Nagy István',
    age: 32
}

something.addPersonRow(pers1);   

/**
 * Just an example
 * const kakas = {};
 * Object.defineProperty(kakas, 'nev', 
 *     {
 *         value: 'Géza',
 *         writable: true
 *     })
 * kakas.nev = 'asd';
 * console.log(kakas);
 */

/**
 * Also an example
 * const pers = {};
 * pers.a = 'Ferenc';
 * pers['a'] = 'Józsi';
 * pers[0] = 'Tojás';
 * console.log(pers);
 */