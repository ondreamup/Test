$(function(){
    $('.topLeft>div').eq(1).css('color','red')
    var state={
        url:"http://192.168.31.110:3000/play/new",
        banner:'.kuwanGoods'
    }
    $('.findClass span').click(function(){
        $(this).addClass('findActive').siblings().removeClass('findActive')
        switch($(this).text()){
            case '最新':
                state.banner = '.kuwanGoods'
                $('.kuwanGoods,#more').show().siblings('.kuwanGoods1,.kuwanGoods2').hide()
                state.url="http://192.168.31.110:3000/play/new"
                if($(state.banner).is(':empty')){
                    add()
                }
                return;
            case '最热':
                state.banner = '.kuwanGoods1'
                $('.kuwanGoods1,#more').show().siblings('.kuwanGoods,.kuwanGoods2').hide()
                state.url='http://192.168.31.110:3000/play/hot'
                if($(state.banner).is(':empty')){
                    add()
                }
                return ;
            case '品类':
                state.banner = '.kuwanGoods2'
                $('.kuwanGoods2').show().siblings().hide()
                state.url='http://192.168.31.110:3000/play/category'
                if($(state.banner).is(':empty')){
                    let pl =true
                    add(pl)
                }
                return;
            default :
                $('.kuwanGoods').show().siblings('.kuwanGoods1,.kuwanGoods2').hide()
                state.url="http://192.168.31.110:3000/play/new"
                if($(state.banner).is(':empty')){
                    add()
                }
                return;
        }
        
    })
    add()
    function add(pl){
        if(pl){
            $.get(state.url,function(res){
                // 获得键值
                var value = Object.values(res)
                // 获得键名
                var name = Object.keys(res)
                // 获取对象长度
                var num = name.length
                for(var out = 0;out<num;out++){
                    $('.kuwanGoods2').append(`
                        <div class='banner'>
                            <p id='title'>${name[out]}</p>
                        </div>
                    `)
                    $('.banner').append(`
                        <div class='bTop'></div>
                        <div class='clear'></div>
                        <div class='bBottom'></div>
                        <div class='clear'></div>
                    `)
                    for(var inner = 0; inner<value[out].length;inner++){
                        var rom = parseInt(Math.random()*11+1)
                        if(inner<4){
                            $('.banner').eq(out).find('.bTop').append(`
                                <div>
                                    <img src="../素材/图片/img/cat_${rom}.png" />
                                    <p>${value[out][inner].productName}(${value[out][inner].nums})</p>
                                </div>
                            `)
                        }else if(inner == 4){
                            $('.banner').eq(out).append(`
                                <hr>
                            `)
                        }else{
                            $('.banner').eq(out).find('.bBottom').append(`
                                <div>
                                    <p>${value[out][inner].productName}(${value[out][inner].nums})</p>
                                </div>
                            `)
                        }
                    }
                }
            })
        }else{
            $.get(state.url,function(res){
                for(var out = 0 ;out<res.length;out++){
                    for(var inner = 0;inner<res.length;inner++){
                        $(state.banner).append(`
                            <div class='goods'>
                                <img src="${res[out][inner].img}" alt="">
                                <p>${res[out][inner].text}</p>
                                <div>
                                    <span id='goodsPri'>${res[out][inner].price}</span>
                                    <div>
                                        <img class='like' src='../素材/图片/css/img/xin.png'>
                                        <span>${res[out][inner].like}</span>
                                        <img class='like' src='../素材/图片/css/img/reply.png'>
                                        <span>${res[out][inner].words}</span>
                                    </div>
                                </div>
                            </div>
                        `)
                    }
                }
            })
        }
    }
    $('#click').click(function(){
        add()
    })
})