$(function(){
    $('.topLeft>div').eq(3).css('color','red')
    $('#noMore').hide()
    var state={
        url:"http://192.168.31.110:3000/useing/public",
        banner:'.kuwanGoods'
    }
    $('.findClass span').click(function(){
        $(this).addClass('findActive').siblings().removeClass('findActive')
    })

    $('.useingClass span').click(function(){
        $(this).css('color','black').siblings().css('color','gray')
        switch($(this).text()){
            case '全部':
                state.banner = '.kuwanGoods'
                $('.kuwanGoods,#more').show().siblings('.kuwanGoods1,.kuwanGoods2,.kuwanGoods3,#noMore').hide()
                state.url="http://192.168.31.110:3000/useing/public"
                if($(state.banner).is(':empty')){
                    add()
                }
                return;
            case '申请':
                state.banner = '.kuwanGoods1'
                $('.kuwanGoods1,#noMore').show().siblings('.kuwanGoods,.kuwanGoods2,.kuwanGoods3,#more').hide()
                state.url='http://192.168.31.110:3000/useing/master'
                if($(state.banner).is(':empty')){
                    add()
                }
                return ;
            case '试用':
                state.banner = '.kuwanGoods2'
                $('.kuwanGoods2,#noMore').show().siblings('.kuwanGoods,.kuwanGoods1,.kuwanGoods3,#more').hide()
                state.url='http://192.168.31.110:3000/useing/public'
                if($(state.banner).is(':empty')){
                    let pl =true
                    add(pl)
                }
                return;
            case '已结束':
                state.banner = '.kuwanGoods3'
                $('.kuwanGoods3,#noMore').show().siblings('.kuwanGoods,.kuwanGoods1,.kuwanGoods2,#more').hide()
                state.url='http://192.168.31.110:3000/useing/master'
                if($(state.banner).is(':empty')){
                    let pl =true
                    add(pl)
                }
                return;
            default :
                $('.kuwanGoods').show().siblings('.kuwanGoods1,.kuwanGoods2').hide()
                state.url="http://192.168.31.110:3000/useing/master"
                if($(state.banner).is(':empty')){
                    add()
                }
                return;
        }
        
    })
    add()
    function add(){
        $.get(state.url,function(res){
            for(var out = 0 ;out<res.length;out++){
                $(state.banner).append(`
                    <div class='goods'>
                        <img src="${res[out].img}" alt="">
                        <h4>${res[out].text}</h4>
                        <div class='chick'>
                            <span>${res[out].totalnum}</span>
                            <span>${res[out].num}</span>
                        </div>
                        <p>${res[out].apply}申请</p>
                        
                    </div>`
                )
                if(res[out].info_ty =='体验师转享'){
                    $(state.banner).find('.goods').eq(out).append(`
                        <span id='vip'>体验师专享</span>
                    `)
                }else{
                    $(state.banner).find('.goods').eq(out).append(`
                        <span id='user'>首发</span>
                    `)
                }
                if(res[out].endTime==undefined){
                    $(state.banner).find('.goods').eq(out).append(`
                        <span>${res[out].report}</span>
                    `)
                }else{
                    $(state.banner).find('.goods').eq(out).append(`
                    <span>${res[out].endTime}</span>
                `)
                }
            }
        })
    }
    $('#click').click(function(){
        add()
    })
    // $(state.banner).click(function(){
    //     $(this).children().find('#vip').parent().hide()
    // })
})
