const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.avif",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        alt: "Vincent van Gogh self portrait"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        alt:"Gustave Courbet self portrait"
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        alt:"Joseph Ducreuz self portrait"
    }
]

const main = document.getElementById("main")
const uploadPost = document.getElementById("upload-post")

uploadPost.addEventListener("click", function() {
    let html = ""
    main.innerHTML = ""
    for (let i=0;i<posts.length;i++) {
    html += `        
        <section class="profile-headers">
            <img class="profile-pic" src="${posts[i].avatar}">
            <div class="container">
                <h1>${posts[i].name}</h1>
                <h2>${posts[i].location}</h2>
            </div>
        </section>
            
        <section>
            <img id="upload-post" class="post" src="${posts[i].post}" alt="${posts[i].alt}">
        </section>
        
        <section>
            <div>
                <img class="action-icon" src="images/icon-heart.png" alt="like button">
                <img class="action-icon" src="images/icon-comment.png" alt="comment button">
                <img class="action-icon" src="images/icon-dm.png" alt="direct message button">
            </div>
            <div class="bottom">
                <h2>${posts[i].likes} likes</h2>
                <h3><span>${posts[i].username}</span> ${posts[i].comment}</h3>
            </div>
        </section>
            
        <script src="index.js"></script>
    `
}  

main.innerHTML = html;

})
