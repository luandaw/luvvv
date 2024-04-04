var index = 0;
function changeimage(){
    var imgs = ["/image/hinh_nen.jpg","/image/hinh_nen_1.webp","/image/hinh_nen_2.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index ==3){
        index=0;
    }
}
setInterval(changeimage, 2000);
