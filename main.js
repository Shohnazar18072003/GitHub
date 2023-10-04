let url = " https://api.github.com/users";
const search = document.querySelector("#search");
const form = document.querySelector("#form");
const btn = document.querySelector(".btn");
const card = document.querySelector(".cards");

search.addEventListener("keyup", (e) => {
  let url = ` https://api.github.com/users/${e.target.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      card.innerHTML = `<li class="list">
      <img src="${data.avatar_url}" alt="" />
      <h2 class="h2">User Name:${e.target.value}</h2>

      <p class="p2">FOLLOWERS:${data.followers}</p>
      <p class="p2">FOLLOWINGS:${data.following}</p>
      <p class="p2">REPOSITORIES:${data.public_repos}</p>
      <a href="${data.html_url}"><button class="btn1">GitHub Link</button></a>
      
    


      <p class="p3"></p>
    </li>`;
    });
});
