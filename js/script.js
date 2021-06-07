/*$(document).ready(function(){
    $('.next').on('click', function(){
        var trenutnaSlika=$('.active');
        var slijedecaSlika=trenutnaSlika.next();
        
        if(slijedecaSlika.length){
            trenutnaSlika.removeClass('active').css('z-index',-10);
            slijedecaSlika.addClass('active').css('z-index',10);
        }
        

    });

    $('.prev').on('click', function(){
        var trenutnaSlika=$('.active');
        var zadnjaSlika=trenutnaSlika.prev();

        if(zadnjaSlika.length){
            trenutnaSlika.removeClass('active').css('z-index',-10);
            zadnjaSlika.addClass('active').css('z-index',10);
            
        }
    });
})
*/

"use strict";

var slider_img = document.querySelector(".slider-img");
var images = [
  "slider-image-1.jpg",
  "slider-image-2.jpg",
  "slider-image-3.jpg",
  "slider-image-4.jpg",
  "slider-image-5.jpg",
  "slider-image-6.jpg",
  "slider-image-7.jpg",
  "slider-image-8.jpg",
  "slider-image-9.jpg"
];
var i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute("src", "assets/" + images[i]);
}
