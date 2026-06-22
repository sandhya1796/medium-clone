console.log("JS Loaded");

const writeBtn = document.getElementById("writeBtn");
const writeForm = document.getElementById("writeForm");
const publishBtn = document.getElementById("publishBtn");

writeBtn.addEventListener("click", () => {
    writeForm.style.display = "block";
});

publishBtn.addEventListener("click", () => {

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const post = document.createElement("div");

    post.classList.add("post");

    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    document.querySelector(".center").appendChild(post);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    writeForm.style.display = "none";

});

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    let posts = document.querySelectorAll(".post");

    posts.forEach(post => {

        const text = post.innerText.toLowerCase();

        if(text.includes(searchValue)){
            post.style.display = "block";
        }else{
            post.style.display = "none";
        }

    });

});

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {

    if(sidebar.style.display === "none"){
        sidebar.style.display = "block";
    }else{
        sidebar.style.display = "none";
    }

});

const bookmarks =
document.querySelectorAll(".bookmark-btn");

bookmarks.forEach(bookmark => {

    bookmark.addEventListener("click", () => {

        bookmark.classList.toggle("fa-regular");
        bookmark.classList.toggle("fa-solid");

    });

});

const comments =
document.querySelectorAll(".comment-btn");

comments.forEach(comment => {

    comment.addEventListener("click", () => {

        const box =
        comment.closest(".post")
        .querySelector(".comment-box");

        if(box.style.display === "none"){
            box.style.display = "block";
        }else{
            box.style.display = "none";
        }

    });

});

const bellBtn =
document.getElementById("bellBtn");

const notificationBox =
document.getElementById("notificationBox");

bellBtn.addEventListener("click", () => {

    if(notificationBox.style.display === "none"){
        notificationBox.style.display = "block";
    }else{
        notificationBox.style.display = "none";
    }

});

const getAppBtn =
document.getElementById("getAppBtn");

getAppBtn.addEventListener("click", () => {

    window.open(
        "https://play.google.com/store",
        "_blank"
    );

});

const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

const profileBtn =
document.getElementById("profileBtn");

const profileBox =
document.getElementById("profileBox");

profileBtn.addEventListener("click", () => {

    if(profileBox.style.display === "none"){

        profileBox.style.display = "block";

    }else{

        profileBox.style.display = "none";

    }

});