//屏幕自适应
const menuButton = document.getElementById("cell-menu-button");
const navBar_Right = document.querySelector('.navbar_right');
const cellphone_navbar = document.getElementById("cellphone_navbar");
// 点击菜单按钮时，切换导航栏的显示状态
menuButton.addEventListener('click', () => {
    navBar_Right.classList.toggle('show');
});
menuButton.addEventListener('click', function (){
    cellphone_navbar.classList.toggle('show');
})

// 监听窗口大小变化
const menu = document.getElementById("cellphone_navbar");
// 设置监听事件
window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        menu.classList.remove('show'); // 超过1000px时强制关闭菜单
    }
});

//手机版下拉菜单第一栏:阻止点击按钮自动跳转父级容器的链接
const button = document.getElementById('sub_nav_button');
button.addEventListener('click', (event) => {
    event.stopPropagation(); // 阻止事件冒泡
    event.preventDefault();  // 阻止链接默认跳转行为（如果需要）
    console.log('Button clicked');
});

document.getElementById('sub_nav_button').addEventListener('click', function (event) {
    // event.preventDefault();
    const subMenu = document.getElementById('cellphone_navbar_sub_nav');
    subMenu.classList.toggle('show');
});