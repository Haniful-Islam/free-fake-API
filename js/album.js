function handleAlbumClick(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers (albums){
    const commentsContainer = document.getElementById('albums-container');
    commentsContainer.classList.add('albums')

    for(const album of albums.slice(0,10) ){
    //    console.log(albums.length);
    const div = document.createElement('div');
    div.classList.add('album')
    const h3 = document.createElement('h3');
    div.appendChild(h3);
    const p = document.createElement('p');
    div.appendChild(p);
    div.innerHTML = `<p>${album.id}</p><h3>${album.title}</h3>
    `;
    commentsContainer.appendChild(div);
    }
}