/**
 * Responsible for the form's workings
 */
class FormController {
    /**
     * @type {FormField[]}
     */
    #formFieldArray;
    /**
     * @type {Manager}
     */
    #manager;

    /**
     * @param {Manager} manager 
     * @param {id: string, label: string} fieldConfiguration 
     */
    constructor(manager, fieldConfiguration){
        const form = document.createElement('form');
        this.#formFieldArray = [];
        document.body.appendChild(form);
        this.#manager = manager;
        for (const config of fieldConfiguration){
            const formField = new FormField(config.id, config.label);
            this.#formFieldArray.push(formField);
            form.appendChild(formField.getFormField());
        }
        const button = document.createElement('button');
        button.textContent = 'Elküld';
        form.appendChild(button);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.#validateAllFields()){
                const value = this.#getValueObject();
                console.log(value)
                const answers = [
                    value.answer1,
                    value.answer2,
                    value.answer3,
                    value.answer4
                ]
                const question = new Question(value.questionText, answers, value.rightAnswer);
                this.#manager.add(question);
                e.target.reset();
            }
        })

    }

    /**
     * validates the fields
     * @returns {boolean} true if all fields are in order, false otherwise
     */
    #validateAllFields(){
        let valid = true;
        for (const field of this.#formFieldArray){
            field.error = '';
            if(field.value == ''){
                field.error = 'Mező kitöltése kötelező!'
                valid = false;
                
            }
        }

        return valid;
    }

    /**
     * returns with the values and ids of the field
     * @returns {questionText:string, answer1:string, answer2:string, answer3:string, answer4:string, rightAnswer:string}
     */
    #getValueObject(){
        let type = '{'
        const result = {};
        for (const field of this.#formFieldArray){
            result[field.id] = field.value
            type += `${field.id}:${typeof field.value},`
        }
        type += '}'
        console.log(type);
        return result;
    }
}

class FormField{
    /**
     * @type {string}
     */
    #id;
    /**
     * @type {HTMLLabelElement}
     */
    #label;
    /**
     * @type {HTMLIputField}
     */
    #input;
    /**
     * @type {HTMLSpanElement}
     */
    #errorField;

    get id(){
        return this.#id;
    }
    
    /**
     * returns with the value of the input
     */
    get value(){
        return this.#input.value;
    }

    get id(){
        return this.#id;
    }

    set error(value){
        this.#errorField.textContent = value;
    }

    /**
     * @param {string} id 
     * @param {string} labelContent 
     */
    constructor(id, labelContent){
        this.#id = id;
        this.#label = Gomszab.makeLabel(id, labelContent);
        this.#input = Gomszab.makeInput(id);
        this.#errorField = Gomszab.makeErrorField();
    }

    /**
     * returns with a div, containing the HTMLElements created within the FormField 
     * @returns {HTMLDivElement}
     */
    getFormField(){
        const div = Gomszab.makeDiv([this.#label, this.#input, this. #errorField])
        return div;
    }
}