const buttonEl = document.getElementById('post-button');

function addMsg() {
    let userNameInput = document.getElementById('user-name').value;
    let newMessageInput = document.getElementById('msg-input').value;

    let photoInput = document.getElementById('upload').files;
    let imageArray = [];
    imageArray.push(photoInput[0]);

    const feedUl = document.getElementById('feed');
    const date = new Date().toLocaleDateString();
    if (userNameInput === '' || newMessageInput === '') {
        alert('Please enter your name and review before trying to post.')
    } else if (photoInput.length === 0) {
        let liEl = document.createElement('li');
        liEl.setAttribute('class', 'msg');
        liEl.innerHTML = '<strong>' + userNameInput + '</strong> - ' + date + '<br><br>' + newMessageInput;    
        feedUl.append(liEl);
        document.getElementById('user-name').value = '';
        document.getElementById('msg-input').value = '';
    } else {
        const image = `<br><br><img class="user-image" src="${URL.createObjectURL(imageArray[0])}">`;
        let liEl = document.createElement('li');
        liEl.setAttribute('class', 'msg');
        liEl.innerHTML = '<strong>' + userNameInput + '</strong> - ' + date + '<br><br>' + newMessageInput + image;    
        feedUl.append(liEl);
        document.getElementById('user-name').value = '';
        document.getElementById('msg-input').value = '';
    }    
}

buttonEl.addEventListener('click', addMsg);
