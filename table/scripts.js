const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]
/**
 * With this fancy, shiny, fresh and brand new method you can now use a complex variable in yur constructor. Truly fascinating and makes me go "awooga".
 */
class Person {
    constructor(obj){
        this.firstname1 = obj.firstname1;
        this.firstname2 = obj.firstname2;
        this.lastname = obj.lastname;
    }
    /**
     * This beautiful babygirl adds the values in the constructor to the called variable.
     */
    render(parentElement){
        const tr = document.createElement("tr");
        parentElement.appendChild(tr);
        const td3 = document.createElement("td");
        td3.innerHTML = this.lastname;
        tr.appendChild(td3)
        const td1 = document.createElement("td");
        td1.innerHTML = this.firstname1;
        tr.appendChild(td1);
        if(this.firstname2 == undefined){
            td1.colSpan = 2;
        } else{
            const td2 = document.createElement("td");
            td2.innerHTML = this.firstname2;
            tr.appendChild(td2);
        }
    }
}
/**
 * This hottie returns the values contained within the form. Would smash.
 */
class FromController{
    #form
    constructor(form){
        this.#form = form;
    }
    #getInputById(id){
        return this.#form.querySelector('#' + id);
    }
    get lastname(){
        const value = this.#getInputById('');
        return value;
    }
    get firstname1(){
        const value = this.#getInputById('');
        return value;
    }
    get firstname2(){
        const value = this.#getInputById('');
        return value;
    }
}
/**
 * This beautiful lady wih big bazongas writes into the table/tbody defined within the getElementById and vomits them directly into it. 
 * It also allows us to render the stuff written in the form.(which don work)
 */
function init(){
    const form = document.getElementById("form");
    for (const person of array){
        const pers = new Person(person);
        pers.render(document.getElementById("tbodyId"));
    }
    const fromController = new FromController(form)
    form.addEventListener('submit', function (e){
        e.preventDefault();
        const obj = {
            firstname1: fromController.firstname1,
            firstname2: fromController.firstname2,
            lastname: fromController.lastname,};
        const pers = new Person(obj);
        pers.render(document.getElementById("tbodyId"))
    })
}
init()