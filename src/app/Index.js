
// Importaciones

const UI = require('./ui');
const Github = require('./github');
const { client_id, client_secret } = require('./confing.json');

// Instancias

const GitHub = new Github(client_id, client_secret);

const ui = new UI();

// Seleccion de Elementos

const UserForm = document.getElementById('userForm');

// Eventos

UserForm.addEventListener('submit', (e) =>{
    
    const TextSearch = document.getElementById('textSearch').value;

    if(TextSearch !== ''){
    //    const User_Date = GitHub.fetch_User(TextSearch);
    //    console.log(User_Date);
        GitHub.fetch_User(TextSearch)
        .then(data => {
            ui.showMessage('User Found', 'alert-success mt-2 col-md-12')
            setTimeout(() => {
                ui.clear_showMessage()
            }, 1500);
            ui.showProfile(data.User_Data)
            ui.showRepositories(data.User_Repositories);
        })
    }

    e.preventDefault()
})