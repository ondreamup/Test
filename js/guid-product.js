$(function(){
    $('.guid-product-xin>img').click(function(){
        $('.guid-product-xin>img').eq(1).show();
        $(this).hide();
        let index=$(this).index();
        if(index==1){
            $('.guid-product-xin>img').eq(1).show();
        }
    })

    $('.guid-product-share>img').click(function(){
        $('.guid-product-share>img').eq(1).show();
        $(this).hide();
        let index=$(this).index();
        if(index==1){
            $('.guid-product-share>img').eq(1).show();
        }
    })


})