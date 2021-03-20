document.querySelector(".btn").addEventListener('click', function(){
    var input = document.querySelector(".IT")
    if(input.value.length < 1){
        window.alert('You must provide tags for the search')
    }
    let tags = input.value.split(" ").join("+")
    //console.log(tags)
    fetch(`https://e621.net/posts.json?limit=50&tags=${tags}`)
    .then(res => res.json())
    .then(data => {
        let holder = document.querySelector('.holder')

        data.posts.forEach((post)=>{
            if(post.file.ext === "png" && "jpg" && "jpge"){
                holder.innerHTML += `
                <div class="post">
                    <p id="art">Artists: ${post.tags.artist.join(", ")|| 'None'}</p>
                    <img id="postimg" width=${post.file.width/10}px height=${post.file.height/10}px src=${post.file.url}
                </div>
                `
            }
        })
    })
})

function add(){
    let a = document.getElementById('tags').value
    let args = a.split(" ").join("+")
    fetch(`https://e621.net/posts.json?limit=50&tags=${args}`)
    .then(res => res.json())
    .then(data => {
        let holder = document.querySelector('.holder')
        data.posts.forEach((post)=>{
            if(post.file.ext === "png" && "jpg" && 'jpge'){
                holder.innerHTML += `
                <div class="post">
                    <p id="art">Artists: ${post.tags.artist.join(", ")}</p>
                    <img id="postimg" width=${post.file.width/4}px height=${post.file.height /4}px src=${post.file.url}
                </div>
                `
            }
            if(post.file.ext === "webm"){
                holder.innerHTML += `
                <div class="post">
                    <p>Artists: ${post.tags.artist.join(", ")}</p>
                    <video id="postvid" width="${post.file.width/4}" height="${post.file.height/4}" controls>
                        <source src=${post.file.url} type=video/${post.file.ext}>
                    </video>
                </div>
                `
            }
            
        })
    })
}