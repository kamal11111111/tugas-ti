var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

const notifyBtn = document.getElementById('notify-btn');
const notification = document.getElementById('notification');


notifyBtn.addEventListener('click', () => {
  
  notification.style.display = 'block';
  
  
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
});