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
                get: function(){
                    return this.#state[index];
                },
                set: function(value){
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