document.getElementById('date').innerHTML = new Date().getFullYear();

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('menu').className += ' hide';
});

var menuItems = document.getElementsByClassName('menu-item');

for(var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
        document.getElementById('menu').className += ' hide';
    })
}

document.getElementById('open').addEventListener('click', function() {
    document.getElementById('menu').className = 'header-menu';
});