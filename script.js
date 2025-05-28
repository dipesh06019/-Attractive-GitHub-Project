// usename code 
function UserProfileData(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(raw => {
            if (!raw.ok) throw new Error("USer not found")
            return raw.json();

        })
}
// //    UserProfileData("async").then(function(data){
// //     console.log(data);

//    })

function Getrepose(username) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
        .then(raw => {
            if (!raw.ok) throw new  Error("Not find repose")
            return raw.json()
        
      .catch(error => {
        alert("Error checking username. Instagram blocks direct access.");
      });
        })

}
//    Getrepose("dipesh06019").then(function(data){
//     console.log(data);

//    })

function EditDetails(details) {
    console.log(details);
   let data= `<div class="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
        <img src="${details.avatar_url}" alt="GitHub Avatar"
          class="w-full h-full object-cover" />
      </div>
      <div class="flex-1">
        <h2 class="text-2xl font-bold text-gray-900">${details.name ? details.name:"Name"}</h2>
        <p class="text-sm text-gray-500">@${details.login}</p>
        <p class="mt-2 text-gray-700 text-sm">
         ${details.bio ? details.bio:""}
        </p>
        <div class="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
          <div><span class="font-semibold text-gray-800">Public Repos:</span>${details.public_repos}</div>
          <div><span class="font-semibold text-gray-800">Followers:</span>${details.followers}</div>
          <div><span class="font-semibold text-gray-800">Following:</span>${details.following}</div>
          <div><span class="font-semibold text-gray-800">Company:</span>${details.company ? details.company :"NA"}</div>
          <div><span class="font-semibold text-gray-800">Location:</span> ${details.location}</div>
          <div><span class="font-semibold text-gray-800">Blog:</span> <a href="https://github.blog"
              class="text-blue-600 hover:underline">${details.blog}</a></div>
          <div><span class="font-semibold text-gray-800">Joined:</span> ${details.created_at}</div>
        </div>
      `
      card.innerHTML=data
}

var searchbtn = document.querySelector(".searchbtn")
var usernameinp = document.querySelector(".usernameinp")
var card=document.querySelector(".card")

searchbtn.addEventListener('click', function () {
    let username = usernameinp.value.trim()
    if (username.length > 0) {
        UserProfileData(username).then(function (data) {
            EditDetails(data)

        })
    }
    else {
        alert("Wrong User ID");
    }
})
