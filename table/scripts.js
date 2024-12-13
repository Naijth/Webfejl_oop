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
 * This beautiful lady wih big bazongas just writes into the table/tbody defined within the getElementById and vomits them directly into it. Great success
 */
function init(){
    for (const person of array){
        const per = new Person(person)
        per.render(document.getElementById("tbodyId"))
    }
}
init()