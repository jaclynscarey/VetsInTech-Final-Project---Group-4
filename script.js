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

var position = 0;
  
function previousImage() {
  if (position > 0){
    const imageSlider = document.getElementById('imageSlider');
    position -= 1;
    var offset = position * 201;
    imageSlider.style.transform = "translateX(-" + offset + "px)";
  }
}
function nextImage() {
  if(position < 2){
    const imageSlider = document.getElementById('imageSlider');
    position += 1;
    var offset = position * 201;
    imageSlider.style.transform = "translateX(-" + offset + "px)";
  } 
}

function openPopup() {
  var text;
  var username = prompt("Please enter your username to Sign In");
  switch(username) {
    default:
      text = username + ", you are now signed in!";
  }
  document.getElementById("successfulSignInMessage").innerHTML = text;
}
