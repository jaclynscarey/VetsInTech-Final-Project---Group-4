const button = document.getElementById('post-button');

function addMsg() {
    let userNameInput = document.getElementById('user-name').value;
    let newMessageInput = document.getElementById('msg-input').value;
    const feedUl = document.getElementById('feed');
    const date = new Date().toLocaleDateString();
    if (userNameInput === '' || newMessageInput === '') {
        alert('Please enter your name and review before trying to post.')
    } else {
        let liEl = document.createElement('li');
        liEl.setAttribute('class', 'msg');
        liEl.innerHTML = '<strong>' + userNameInput + '</strong> - ' + date + '<br><br>' + newMessageInput;    
        feedUl.append(liEl);
        document.getElementById('user-name').value = '';
        document.getElementById('msg-input').value = '';
    }    
}

button.addEventListener('click', addMsg);
