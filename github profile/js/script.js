const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const main = document.getElementById('main')
const search = document.getElementById('search')

async function getUser(username){
    try {  
        const { data } = await axios(APIURL + username)

        createUserCard(data)

    }catch(err){
        console.log(err)
    }
}

function createUserCard(user){
    const cardHTML = ` <div class="card">
    <div>
      <img
        style="width: 200px"
        src="${user.avatar_url}"
        alt="${user.name}"
        class="avater">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>

      <ul>
        <li>${user.followers}<strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>`

  main.innerHTML = cardHTML
}
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = e.search.value;

    if(user) {
        getUser(user)

        search.value = ''
    }
})