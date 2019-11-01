class Github {

    constructor(ClienteId, ClientSecret){
        this.ClienT_Id = ClienteId;
        this.Client_Secret = ClientSecret;
        this.repos_sort = 'created: asc'
    }


    async fetch_User(user){
        const userDataRequest = await fetch(`https://api.github.com/users/${user}?client_id=${this.Client_Id}&client_secret=${this.Client_Secret}`)

        const repositoriesRequest = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.Client_Id}&client_secret=${this.Client_Secret}&sort=${this.repos_sort}`);

        const User_Data = await userDataRequest.json();
        const User_Repositories = await repositoriesRequest.json()
        

        return {
            User_Data, 
            User_Repositories
        }    
    }
}

module.exports = Github;