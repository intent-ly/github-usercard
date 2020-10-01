/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/intent-ly')
  .then(dat =>{
    console.log(dat)
    console.log(dat.data)
  })
  .catch(non =>{
    console.log(non)
    debugger
  })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
const entryPoint = document.querySelector('.cards');
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function card (data){
  //Declaring Elements
  const profileCard = document.createElement('div')
  const profileImage = document.createElement('img')
  const profileInfoCard = document.createElement('div')
  const profileName = document.createElement('h3')
  const profileUsername =document.createElement('p')
  const profileLocation =document.createElement('p')
  const profileProfile =document.createElement('p')
  const profileAnchor =document.createElement('a')
  const profileFollowers =document.createElement('p')
  const profileFollowing =document.createElement('p')
  const profileBio =document.createElement('p')

  //Filling content
  profileImage.setAttribute('src', data.avatar_url)
  profileName.textContent = `${data.name}`
  profileUsername.textContent = `${data.login}`
  profileLocation.textContent =`${data.location}`
  profileFollowers.textContent =`${data.followers}`
  profileFollowing.textContent =`${data.following}`
  profileBio.textContent =`${data.bio}`

  profileAnchor.setAttribute('href', data.html_url)
  profileAnchor.textContent = `${data.html_url}`

  profileCard.classList.add('card')
  profileInfoCard.classList.add('card-info')
  profileName.classList.add('name')
  profileUsername.classList.add('username')

  //Organizing card
  profileCard.appendChild(profileImage)
  profileCard.appendChild(profileInfoCard)

  profileInfoCard.appendChild(profileName)
  profileInfoCard.appendChild(profileUsername)
  profileInfoCard.appendChild(profileLocation)
  profileInfoCard.appendChild(profileProfile)
  profileProfile.appendChild(profileAnchor)
  profileInfoCard.appendChild(profileFollowers)
  profileInfoCard.appendChild(profileFollowing)
  profileInfoCard.appendChild(profileBio)

  //Returning DOM card
  return profileCard
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
