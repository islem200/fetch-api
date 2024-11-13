
async function getGithubUsres() {
    try {
        const response = await axios.get('https://api.github.com/users/islem200');

        const login = document.querySelector('.login');
        
        const img  = document.querySelector('.img');
        
        const bio= document.querySelector('.description');

        login.textContent = response.data.login;
        img.src = response.data.avatar_url
        bio.textContent = response.data.bio
        
        
    } catch (error) {
        console.log(error)
        
    }
    
}
getGithubUsres()