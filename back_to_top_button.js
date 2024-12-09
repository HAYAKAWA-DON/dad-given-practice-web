// 返回顶部按钮相应事件
const backToTopButton = document.getElementById("backToTop");
// 当页面滚动时显示或隐藏返回顶部按钮
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // 页面滚动100px后显示按钮
    } else {
        backToTopButton.style.display = "none"; // 否则隐藏按钮
    }
};
// 滚动回顶部的函数
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // 平滑滚动效果
    });
}


