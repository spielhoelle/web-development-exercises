let images = [];
let currentIndex = 0;
let leftarrowObj = document.getElementById('leftarrow');
let rightarrowObj = document.getElementById('rightarrow');
let detaillayerObj = document.getElementById('detaillayer');
let detailimageObj = document.getElementById('detailimage');
let btngoObj = document.getElementById('btngo');
let btnuploadimageObj = document.getElementById('btnuploadimage');
let thumbnailcontainerObj = document.getElementById('thumbnailcontainer');
let uploadimageObj = document.getElementById('uploadimage');

document.addEventListener('click', function (event) {
	if (event.target.matches('.thumbnail')) {
        let index = event.target.getAttribute('data-index');
        showImageDetails(parseInt(index));
	}
}, false);

leftarrowObj.onclick = function(e) {
    prevImage();
    e.stopPropagation();
}

rightarrowObj.onclick = function(e) {
    nextImage();
    e.stopPropagation();    
}

detaillayerObj.onclick = function(e) {
    showImageDetails(false);
}

btngoObj.onclick = function(e) {
    let searchboxObj = document.getElementById('searchbox');
    let searchPhrase = searchboxObj.value;
    uploadimageObj.style.display = 'none';
    thumbnailcontainerObj.style.display = 'flex';

    loadImages(searchPhrase);
}

btnuploadimageObj.onclick = function(e) {
    thumbnailcontainerObj.style.display = 'none';
    uploadimageObj.style.display = 'block';
}

function nextImage() {   
    let nextIndex = (currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    detailimageObj.style.background = 'url(\'../images/'+images[nextIndex].image+'\') no-repeat center ';
    currentIndex = nextIndex;    
}

function prevImage() {   
    let nextIndex = (currentIndex === 0 ? images.length - 1: currentIndex - 1);
    detailimageObj.style.background = 'url(\'../images/'+images[nextIndex].image+'\') no-repeat center ';
    currentIndex = nextIndex;
}

function showImageDetails(index) {
    currentIndex = index;
    if(index || index === 0) {
        detaillayerObj.style.display = 'block'; 
        detailimageObj.style.background = 'url(\'../images/'+images[index].image+'\') no-repeat center ';
    }
    else {
        detaillayerObj.style.display = 'none';
    }
}

function loadImages(q) {
    var xhr = new XMLHttpRequest();
    if(!q) {
        xhr.open('GET', 'http://localhost:3000/search');
    }
    else {
        xhr.open('GET', 'http://localhost:3000/search?q='+q);
    }
    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log('success, status code is 200');
            
            let resultObj = JSON.parse(xhr.responseText);
            images = resultObj.images;
            console.log(resultObj);                     

            thumbnailcontainerObj.innerHTML = '';
            for(let i=0; i<images.length; i++) {
                let newThumbnail = document.createElement('div');
                newThumbnail.className = 'thumbnail';
                newThumbnail.setAttribute('data-index', i);
                newThumbnail.style.background = 'url(\'../images/'+images[i].image+'\') no-repeat center';
                thumbnailcontainerObj.appendChild(newThumbnail);
            }
        }
    }
    xhr.send();
}

loadImages();