
class UI {
    constructor(){
        this.profile = document.getElementById('profile');
        this.Repositories = document.getElementById('repositories');
    }

    showProfile(user){
        console.log(user);
        this.profile.innerHTML = `
            <div class="card mt-2 sticky-top animated bounceInLeft"> 
                <img src="${user.avatar_url}" class="card-img-top"/>
                <div class="card-body"> 
                    <h3 class="card-title"> ${user.name} / ${user.login}</h3>
                    <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile </a>
                    <span class="badge badge-success"> 
                        Followers: ${user.followers}
                    </span>
                    <span class="badge badge-primary"> 
                        Following: ${user.following}
                    </span>
                    <span class="badge badge-wrning"> 
                        Company: ${user.company}
                    </span>
                    <span class="badge badge-info d-block"> 
                        Blog: ${user.blog}
                    </span>
                </div>
            </div>   
        `
    }

    showRepositories(repositories){
        console.log(repositories)
        let template = ''; // Al declararlo como let template; sin valor me declaraba en el html un indefinido.
        repositories.forEach(repo => {
            template += `
            <div class="card card-body mt-2 animated bounceInUp" > 
                <div class="row"> 
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank"> ${repo.name} </a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary"> Language: ${repo.language}</span>
                        <span class="badge badge-success"> Forks: ${repo.forks_count}</span>
                </div>
                </div>
            </div>
        `
        this.Repositories.innerHTML = template;
        });
       
    }

    showMessage(message, cssClass){
        const DIV = document.createElement('div');
        DIV.className = cssClass;
        DIV.id = 'UF'
        const Message = document.createTextNode(message);
        DIV.appendChild(Message);
        const content = document.querySelector('.row');
        const elemento_anterior = document.querySelector('#profile')
        content.insertBefore(DIV, elemento_anterior);
    }

    clear_showMessage(){
        const Element = document.getElementById('UF');
        Element.remove();
    }
}

module.exports = UI;