const toggleBtn = document.getElementById('toggle-btn');
const sideBar = document.getElementById('side-bar');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', function() {
    sideBar.classList.toggle('open');
    
    if (sideBar.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});
