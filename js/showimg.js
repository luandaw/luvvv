function showimg() {
    var image = document.getElementById('imagePlaceholder');
    image.src = '/image/size.jpg';
    if (image.style.display === "none") {
        image.style.display = "block"; // Hiển thị ảnh nếu đang ẩn
        image.style.width = '500px';
    } else {
        image.style.display = "none"; // Ẩn ảnh nếu đang hiển thị
    }
    
}
