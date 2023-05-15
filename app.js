const menu = document.getElementById('menu');

Array.from(document.getElementsByClassName('menu-item')).forEach((item, index) => {
    item.onmousemove = () => {
        menu.dataset.activeindex = index;
    }
});