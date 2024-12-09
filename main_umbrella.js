// 图片点击的响应事件
let images = document.querySelectorAll('.um_img');  // 获取所有有.um_img类的图片
images.forEach(function(img) {
    img.addEventListener('click', function() {
        openModal(img);  // 为每张图片绑定点击事件
    });
});
// 打开弹窗并设置弹窗中的图片
function openModal(imgElement) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}
// 关闭弹窗
function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

