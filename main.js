

function loadUpAllInfo () {
  let mainListContainer = document.querySelector("body");
  let octoInfoList = JSON.parse(this.responseText)

  let htmlString = "";

  let mainTitle = `
    <div class = "header">
      <h1 class = "headerContent">${octoInfoList.name}</h1>
    </div>
  `

  let content = `
  <div class = "content">
    <div class = "leftContent">
      <h3 class = "subtitles">The Basics</h3>
        <ul class = "basics">
          <li><span>Name:</span> ${octoInfoList.name}</li>
          <li><span>GitHub URL:</span> ${octoInfoList.url}</li>
          <li><span>Email:</span> ${octoInfoList.email}</li>
          <li><span>Company:</span> ${octoInfoList.company}</li>
          <li><span>Website:</span> ${octoInfoList.blog}</li>
        </ul>
    </div>
    <div class = "rightContent">
      <h3 class = "subtitles">The Story</h3>
        <div>
          <p class = "bio">${octoInfoList.bio} "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    </div>
    <div>
      <img src = ${octoInfoList.avatar_url} class = "profile-pic">
    </div>
  </div>
  `

  htmlString = mainTitle + content;
  mainListContainer.innerHTML = htmlString;

}


let req = new XMLHttpRequest();
req.open("get", "http://192.168.1.12:8000/octocat");
req.addEventListener("load", loadUpAllInfo);
req.send();
