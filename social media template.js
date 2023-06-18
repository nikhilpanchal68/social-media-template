let notification = document.getElementById("notification");
let dropDwnNotification = document.getElementById("dropDwnNotification");
let replacePLogo = document.getElementsByClassName("replacePLogo");
let dropDwnLinks = document.getElementsByClassName("dropDwnLinks");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
//page loader
$(window).load(function () {
  $("#loading").hide();
});
// notification hover effect
notification.addEventListener("mouseover", function () {
  dropDwnNotification.style.visibility = "visible";
});
notification.addEventListener("mouseout", function () {
  dropDwnNotification.style.visibility = "hidden";
});
//window resize to hide menu options on full screen
function checkForWindowResize() {
  console.log(`Screen width: ${window.innerWidth}`);
  if (window.innerWidth > 700) {
    dropDwnLinks[0].style.display = "none";
    main.style.top = "55px";
    footer.style.top = "55px";
  }
}
window.addEventListener("resize", checkForWindowResize);
//replace logo event listener to show menu
replacePLogo[0].addEventListener("click", function () {
  if (dropDwnLinks[0].style.display === "none") {
    dropDwnLinks[0].style.display = "block";
    main.style.top = "290px";
    footer.style.top = "290px";
  } else {
    dropDwnLinks[0].style.display = "none";
    main.style.top = "55px";
    footer.style.top = "55px";
  }
});
//create a new post
let postBtn = document.getElementById("postBtn");
postBtn.addEventListener("click", function () {
  let statusIP = document.getElementById("statusIP").value.trim();
  let posts = document.getElementById("posts");
  let userName = document.getElementById("userName").innerHTML;
  let myProfilePic = document.getElementById("myProdilePic").src;
  if (statusIP != "") {
    let div = document.createElement("div");
    div.innerHTML = `
            <div class="post mt-20">
                <div class="postHeader mb-20">
                    <div class="postImageDiv">
                        <img class="postImage" src="${myProfilePic}">
                    </div>
                    <div class="postPerson ml-20">
                        <span>${userName}</span>
                    </div>
                    <div class="postTime">
                        1 min
                    </div>
                </div>
                <hr style="opacity: 0.5;" class="mb-20"></hr>
                <p class="postText mb-20" >${statusIP}</p>
                <div class="postBtns">
                    <button type="button" class="likeBtn">
                        <i class="fa fa-thumbs-up"></i>
                        <span class="ml-5">Like</span>
                    </button>
                    <button type="button" class="commentBtn">
                        <i class="fa fa-comment"></i>
                        <span class="ml-5">Comment</span>
                    </button>
                </div>
            </div>
            `;
    posts.prepend(div);
    document.getElementById("statusIP").value = "";
  } else {
    alert("You can't Post empty status");
    document.getElementById("statusIP").value = "";
  }
});
