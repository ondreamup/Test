$(function(){
    $.get('http://192.168.31.110:3000/play/new',function(res){
        for(var out = 0 ;out<res.length;out++){
            for(var inner = 0;inner<1;inner++){
                $('.banner').append(`
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
})