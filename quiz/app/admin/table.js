/**
 * creates a table and defines what the manager should do if something gets added
 */
class Table{
    /**
     * @type {Manager}
     */
    #manager;

    /**
     * 
     * @param {Manager} manager 
     */
    constructor(manager){
        this.#manager = manager;
        const tbody = Gomszab.makeTableWithHeader(['Kérdés', 'válasz1', 'válasz2', 'válasz3', 'válasz4', 'helyesválasz'])
        this.#manager.setAddCallback((question) => {
            const tableRow = document.createElement('tr');
            tbody.appendChild(tableRow);

            Gomszab.makeCellToRow(tableRow, question.questionText);
            for (const answers of question.answers){
                Gomszab.makeCellToRow(tableRow, answers);
            }
            Gomszab.makeCellToRow(tableRow, question.rightAnswer);
        })
    }
}