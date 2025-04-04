class Person{
    #name;
    #birth;
    #mood;

    constructor(name, birth, mood){
        this.#name = name;
        this.#birth = birth;
        this.#mood = mood;
    }

    set name(value){
        this.#name = value; 
    }

    get name(){
        return this.#name;
    }

    get birth(){
        return this.#birth;
    }

    set mood(value){
        this.#mood = value;
    }
}

class PersonView{
    #person;
    #footer;

    set footer(value){
        this.#footer.textContent = value;
    }

    constructor(person){
        this.#person = person;

        const divElement = document.createElement('div');
        document.body.appendChild(divElement);

        const oneElement = document.createElement('p');
        divElement.appendChild(oneElement);
        oneElement.innerHTML = this.#person.name + ' - ' + this.#person.birth;

        const oneSpanElement = document.createElement('span')
        document.body.appendChild(oneSpanElement);
        this.#footer = oneSpanElement;

        const oneButtonElement = document.createElement('button')
        document.body.appendChild(oneButtonElement);
        oneButtonElement.type = 'button';
        oneButtonElement.innerHTML = 'e';

        oneButtonElement.addEventListener('click', (e) => {
            e.preventDefault();
            this.footer = 'e';
        })
    }
}

const pers = new Person('a', 'b', '');
const asd = new PersonView(pers);

pers.mood = 'c';

const asd2 = new PersonView(pers);

asd2.footer = 'd'