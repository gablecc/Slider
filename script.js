$(document).ready(function(){
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