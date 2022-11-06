function handleCommentClick(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayAlbum(data))
}

function displayAlbum (comments){
    // console.log(comments);
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.classList.add('comments')

    for(const comment of comments.slice(0,10) ){
    //    console.log(post.length);
    const div = document.createElement('div');
    div.classList.add('comment')
    const h3 = document.createElement('h3');
    div.appendChild(h3);
    const p = document.createElement('p');
    div.appendChild(p);
    div.innerHTML = `<p>${comment.id}</p><h3>${comment.name}</h3>
    <p>${comment.email}</p>}
    <p>${comment.body}</p>}
    `;
    commentsContainer.appendChild(div);
    }
}